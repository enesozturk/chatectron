const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.broadcast = function broadcast(data) {
	wss.clients.forEach(function each(client) {
		if (client.readyState === WebSocket.OPEN) {
			client.send(data);
		}
	});
};

wss.on('connection', function connection(ws) {
	ws.on('message', function incoming(data) {
		console.log(data);

		wss.clients.forEach(function each(client) {
			if (client.readyState === WebSocket.OPEN) {
				client.send(data);
			}
		});
	});
});

//start our server
server.listen(process.env.PORT || 8081, () => {
	console.log(`Server started on port ${server.address().port} :)`);
});
