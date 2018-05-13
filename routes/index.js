const express = require('express');
const clients = require('./clients');
const users = require('./users');
const groups = require('./groups');

const router = express.Router();

router.use('/clients', clients);
router.use('/users', users);
router.use('./groups', groups);


module.exports = router;