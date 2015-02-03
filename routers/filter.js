
const _ = require('lodash');
const express = require('express');
const router = express.Router();

var filter = function (req, res, next) {

};

router.post('/', filter);

module.exports = router;
