
const _ = require('lodash');

var validate = function (req, res, next) {
  var data = req.body;

  console.log('receiving data', JSON.stringify(data));

  if(!_.isObject(data) ||
     !_.isArray(data.payload)) {

    console.error('validate error', !_.isObject(data), !_.isArray(data.payload));
    res.status(400).json({
      error: 'Could not decode request: JSON parsing failed'
    });
    return;
  }

  console.log('validate success');
  next();
};

module.exports = validate;
