var io = require("socket.io").listen(8100, function() {
	console.log("server running");
});

io.sockets.on("connection",function(socket){
    console.log("Server-Client Connected!");
});