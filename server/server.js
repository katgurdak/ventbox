var express = require('express');

var app = express();

app.use(express.static(__dirname + '/../client'));

app.get('/', function(request, response) {
  response.render('index');
});

var port = process.env.PORT || 5000
app.listen(port);

console.log('Listening on ' + port + '!');

module.exports = app;