var express = require('express');

var app = express();

app.get('/', function(request, response) {
  response.end('Hello!')
});

app.listen(3000);

console.log('Listening!');

module.exports = app;