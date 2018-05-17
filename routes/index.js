const express = require('express');
const clients = require('./clients');
const groups = require('./groups');

const router = express.Router();

router.use('/clients', clients);
router.use('/groups', groups);


module.exports = router;