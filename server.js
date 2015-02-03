
const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const server = express();

server.set('port', PORT);

// routers
server.use('/filter', require('./routers/filter'));

// server
server.listen(PORT, function () {
  console.log('Server listening on ', PORT);
});

module.exports.server = server;
