
const request = require('superagent');
const data = require('./request.json');
const expect = require('./response.json');

request
.post('http://mi9-filter.herokuapp.com')
.set({'Accept': 'application/json'})
.send(data)
.end(function(err, res){
  console.log('err', err);
  console.log('res', JSON.stringify(res.body), JSON.stringify(res.body) === JSON.stringify(expect));
  process.exit();
});
