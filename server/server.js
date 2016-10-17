var express = require('express');

var app = express();

app.use(express.static(__dirname + '/../client'));

app.get('/', function(request, response) {
  response.end()
});

app.listen(5000);

console.log('Listening!');

module.exports = app;