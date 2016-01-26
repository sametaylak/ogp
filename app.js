var app = require('express');
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', function(socket) {
	console.log("one user connected");
})

http.listen(1100, function() {
	console.log("server is running... on port 1100");
})