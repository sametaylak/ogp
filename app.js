var io = require("socket.io").listen(8100);

io.sockets.on("connection",function(socket){
    console.log("Server-Client Connected!");
});