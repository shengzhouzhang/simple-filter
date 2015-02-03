
var handler = function(err, req, res, next){
  res.status(400).json({
    error: 'Could not decode request: JSON parsing failed'
  });
};

module.exports = handler;
