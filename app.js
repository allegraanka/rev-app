const express = require('express');
const app = express();
const path = require('path');
const routes = require('./api/routes');
const bodyParser = require('body-parser');

app.set('port', 3000);

// middleware function
app.use(function(req, res, next) {
  console.log(req.method, req.url);
  next();
});

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended : false })); // only gives access to string and array data types from form body

app.use('/api', routes);

const server = app.listen(app.get('port'), function() {
  const port = server.address().port;
  console.log('Magic happens on port ' + port);
});

// test nodemon
