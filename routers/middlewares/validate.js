
const _ = require('lodash');

var validate = function (req, res, next) {
  var data = req.body;

  if(!_.isObject(data) ||
     !_.isArray(data.payload)) {
       
    res.status(400).json({
      error: 'Could not decode request: JSON parsing failed'
    });
    return;
  }
  next();
};

module.exports = validate;
