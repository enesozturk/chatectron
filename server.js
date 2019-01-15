var io = require('socket.io').listen(3000);
console.log('Server is listening on port 3000...');
io.sockets.on('connection', function (client) {
    client.on('msg', function (data) {
        io.emit('msg', data);
    })
})