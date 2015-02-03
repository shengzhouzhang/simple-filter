
var setHeader = function (req, res, next) {
  res.header('Access-Control-Allow-Origin' , '*')
  .header('Cache-Control' , 'no-cache, no-store, must-revalidate')
  .header('Pragma' , 'no-cache')
  .header('Expires' , 0);
  next();
};

module.exports = setHeader;
