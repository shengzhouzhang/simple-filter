
const request = require('superagent');
const data = require('./request.json');
const expect = require('./response.json');
const url = 'http://mi9-filter.herokuapp.com';
const localhost = 'http://localhost:3000';

request
.post(localhost)
.set({'Accept': 'application/json'})
.send(data)
.end(function(err, res){
  console.log('err', err);
  console.log('res', JSON.stringify(res.body), JSON.stringify(res.body) === JSON.stringify(expect));
  process.exit();
});
