var express = require('express');
var app = express();
var http = require('http');
var path = require('path');
var port = process.env.PORT || 5000;

app.set('port', process.env.PORT || 5000);
app.listen(port, function() {
	console.log('app is runing on port', port);
});



