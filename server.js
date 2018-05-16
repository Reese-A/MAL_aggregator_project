const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const LocalStrategy = require('passport-local');
const bcrypt = require('bcrypt');
const Redis = require('connect-redis')(session);

const User = require('./db/models/Client');


const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use(session({
  store: new Redis(),
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
}));

app.use(express.static('public'));

//passport stuff
app.use(passport.initialize());
app.use(passport.session());

//after login
passport.serializeUser((client, done) => {
  console.log('serializing');
  return done(null, {
    id: client.id,
    username: client.username
  });
});

//after every request
passport.deserializeUser((client, done) => {
  console.log('deserializing');
  new Client({
    id: client.id
  }).fetch()
    .then((user) => {
      client = client.toJSON();
      return done(null, {
        id: client.id,
        username: client.username
      });
    })
    .catch((err => {
      console.log(err);
      return done(err);
    }));
});

passport.use(new LocalStrategy(function (username, password, done) {
  return new Client({
    username: username
  }).fetch()
    .then(client => {
      client = client.toJSON();
      console.log(client);

      if (client === null) {
        return done(null, false, {
          message: 'bad username or password'
        });
      } else {
        console.log(password, client.password);
        bcrypt.compare(password, client.password)
          .then(res => {
            if (res) {
              console.log(res);
              return done(null, client);
            } else {
              return done(null, false, {
                message: 'Bad usernmae or password'
              });
            }
          });
      }
    })
    .catch(err => {
      console.log('error', err);
      return done(err);
    })
}));


app.use('/api', routes);

app.get('/smoke', (req,res)=>{
  return res.send('smoke test')
})

module.exports = app;