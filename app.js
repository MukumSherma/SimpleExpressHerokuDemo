var express = require('express');
var http = require('http');
var app = express();

//http.createServer(app).listen(8900);

app.get('/',function(req,res){
	console.log('Listening to port 8900')
	res.send('Hello From Express , Nepal');
});

module.exports = app;