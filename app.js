var express = require('express');
var path = require('path');
var app = express();
var port = process.env.PORT || 8080;
var fs = require('fs');

app.set('view engine', 'ejs');
app.use(express.static( "public"));
app.use(express.static(path.join(__dirname, '/views')));

app.get('/', function(req, res) {
	res.render('home', {'data' : null});
});

app.get('/send', function(req, res) {
  res.send(200);
});

app.listen(port);
console.log("Listening to port", port);