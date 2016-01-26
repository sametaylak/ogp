
var express = require('express');  
var app = express();
var server = require('http').createServer(handler)
var io = require('socket.io')(server);

server.listen(80);

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
}); 