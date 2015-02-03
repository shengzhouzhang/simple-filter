
const _ = require('lodash');
const express = require('express');
const validate = require('./middlewares/validate');
const router = express.Router();

var filter = function (req, res, next) {
  var data = req.body;

  console.log('data', data);
  res.status(200).json({ response: [] });
};

router.post('/', [ validate ], filter);

module.exports = router;
