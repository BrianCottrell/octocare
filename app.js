var express = require('express');
var path = require('path');
var app = express();
var port = process.env.PORT || 8080;
var fs = require('fs');
var nodemailer = require('nodemailer');
var config;
if(!process.env.ENVIRONMENT){
    config = require('./config');
}
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.GMAIL_USERNAME || config.gmail.username,
        pass: process.env.GMAIL_PASSWORD || config.gmail.password
    }
});

app.set('view engine', 'ejs');
app.use(express.static( "public"));
app.use(express.static(path.join(__dirname, '/views')));

app.get('/', function(req, res) {
	res.render('index', {'data' : null});
});

app.get('/video', function(req, res) {
	res.render('home', {'data' : null});
});

app.get('/send', function(req, res) {
	var mailOptions = {
		from: 'Octocare',
		to: 'ed.arenberg@gmail.com, sarahjhan024@gmail.com, mischaleen@gmail.com, itsalwaysdns@gmail.com',
		subject: 'Octocare',
		text: 'Octocare',
		html: '<style>body{background-color: grey;}h1{width:66%; margin:0px; color:#FFF; font-family: Arial; background-color:#337;}p{width:66%; margin:0px; color:#FFF;font-family: Arial;  background-color:#337;}.photo{width:66%; display:block}div{margin-left:23%}</style><a href="http://www.google.com/"><div class="outer"><img src="https://res.cloudinary.com/dhl3gjazr/image/upload/v1539575902/wayne-shorter/octocare.png" class="photo"></div></a>'
	};
	transporter.sendMail(mailOptions, function(error, info){
		if(error){
			console.log(error);
		}else{
			console.log('Message sent: ' + info.response);
		};
	});
	res.send(200);
});

app.listen(port);
console.log("Listening to port", port);