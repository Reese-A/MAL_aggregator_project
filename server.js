const express = require('express');
// const routes = require('./routes');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const LocalStrategy = require('passport-local');
const bcrypt = require('bcrypt');
const Redis = require('connect-redis')(session);

const User = require('./db/models/User');


const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.get('/smoke', (req,res)=>{
  return res.send('smoke test')
})
module.exports = app;