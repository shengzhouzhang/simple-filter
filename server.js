
const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const server = express();

server.set('port', PORT);

server.use(bodyParser.json());
server.use(function(err, req, res, next){
  res.status(400).json({
    error: 'Could not decode request: JSON parsing failed'
  });
});
server.use('/', require('./routers/filter'));

server.listen(PORT, function () {
  console.log('Server listening on ', PORT);
});

module.exports.server = server;
