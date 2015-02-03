
const request = require('superagent');
const data = require('./data.json');

request
.post('/filter')
.set({'Accept': 'application/json'})
.send(data)
.end(function(err, res){
  console.log('err', err);
  console.log('res', res);
  process.exit();
});
