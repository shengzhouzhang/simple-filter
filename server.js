
const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const server = express();

server.set('port', PORT);

server.use(bodyParser.urlencoded({ extended: true, limit: '5mb' }));
server.use(bodyParser.json({ limit: '5mb' }));
server.use(bodyParser.json({ type: 'application/vnd.api+json', limit: '5mb' }));
server.use('/', require('./routers/filter'));

server.listen(PORT, function () {
  console.log('Server listening on ', PORT);
});

module.exports.server = server;
