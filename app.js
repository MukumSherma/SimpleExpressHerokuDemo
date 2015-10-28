var express = require('express');
var http = require('http');
var app = express();

//http.createServer(app).listen(8900);
app.set('port', process.env.PORT || 5000);

var server = app.listen(app.get('port'), function() {
	console.log('Hello hello')
  //debug('Express server listening on port ' + server.address().port);
});

app.get('/',function(req,res){
	console.log('Listening to port 5000')
	res.send('Hello From Express , Nepal');
});

//module.exports = app;