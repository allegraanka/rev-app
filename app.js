const express = require('express');
const app = express();
const path = require('path');

const routes = require('./routes');

app.set('port', 3000);

app.use(function(req, res, next) {
  console.log(req.method, req.url);
  next();
});

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', routes);

app.get('/json', function(req, res) {
  console.log('GET json data');
  res
  .status(200)
  .json({"jsonData" : true});
});

app.get('/file', function(req, res) {
  console.log('GET static file');
  res
  .status(200)
  .sendFile(path.join(__dirname, 'app.js'));
});

const server = app.listen(app.get('port'), function() {
const port = server.address().port;
console.log('Magic happens on port ' + port);
});
