const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');

const Client = require('../../db/models/Client');

const saltedRounds = 12;
const router = express.Router();

router.route('/')
  .post((req, res) => {
    console.log(req);
    
    let {
      username,
      password,
      email
    } = req.body;

    username = username.trim();

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
            return res.json({
              success: true
            })
          })
          .catch((err) => {
            console.log(err);
          });
      })
    })
  })


module.exports = router;