const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');

const Group = require('../../db/models/Group');
const User = require('../../db/models/User');
const isAuthenticated = require('../../utilities/isAuthenticated')

const router = express.Router();


router.route('/')
  .post(isAuthenticated, (req, res) => {
    let {
      name
    } = req.body;

    name = name.trim();

    return Group
      .where({
        client_id: req.user.id
      })
      .fetch()
      .then((group) => {
        return new User({
            name,
            group_id: group.id
          })
          .save()
          .then((user) => {
            return res.json({
              success: true
            })
          })
          .catch((err) => {
            console.log(err);
            return res.json({
              success: false
            })
          })
      })
  })

  .get(isAuthenticated, (req, res) => {
    const userId = req.user.id;
    console.log('GET REQUEST RECEIVED');
    return Group
      .where({
        client_id: userId
      })
      .fetch()
      .then((group) => {
        const groupId = group.id
        return User
          .where({
            group_id: groupId
          })
          .fetchAll()
          .then((users) => {
            console.log(users);
            return res.json(users);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      })
  })

module.exports = router;