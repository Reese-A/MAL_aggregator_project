const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');

const Client = require('../../db/models/Client');

const saltedRounds = 12;
const router = express.Router();

router.route('/')
  .post((req,res)=>{
    
  })


module.exports = router;