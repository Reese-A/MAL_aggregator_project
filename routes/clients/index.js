const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');

const Client = require('../../db/models/Client');
const Group = require('../../db/models/Group');

const saltedRounds = 12;
const router = express.Router();

router.route('/')
  .post((req, res) => {
    let {
      username,
      password,
      email
    } = req.body;

    username = username.trim();
    email = email.trim();

    bcrypt.genSalt(saltedRounds, function (err, salt) {
      if (err) {
        console.log(err);
      }
      bcrypt.hash(req.body.password, salt, function (err, hash) {
        if (err) {
          console.log(err);
        }
        return new Client({
            username,
            email,
            password: hash,
          })
          .save()
          .then((user) => {
            return new Group({
              name: `${username}'s group`,
              client_id: user.id
            })
            .save()
          })
          .then((group) => {
            return res.json({
              success: true
            })
          })
          .catch((err) => {
            console.log(err);
            return res.json({
              success: false
            })
          });
      })
    })
  })
  

router.route('/login')
  .post(
    passport.authenticate('local'),
    (req, res) => {
      console.log('CLIENT', req.user);
      console.log(req.user.username + ' logged in');
      return res.json({
        success: true
      })
    })

router.route('/logout')
  .get((req, res) => {
    req.logout();
    res.json({
      success: true
    });


  });


module.exports = router;