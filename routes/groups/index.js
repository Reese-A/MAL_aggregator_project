const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');

const Group = require('../../db/models/Group');
const User = require('../../db/models/User');
const isAuthenticated = require('../../utilities/isAuthenticated')

const router = express.Router();


router.route('/')
  .post(isAuthenticated, (req,res) => {
    const group_id = req.user.id
    let {
      name
    } = req.body;

    name = name.trim();
    

  })


module.exports = router;