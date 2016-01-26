// app.js
var express = require('express');  
var app = express();  
var server = require('http').createServer(app);  
var io = require('socket.io')(server);

server.listen(4200, function() {
	console.log("server dinleniyor");
});  