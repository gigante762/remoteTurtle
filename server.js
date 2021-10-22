const WebS = require("ws")

function heartbeat() {
    this.isAlive = true;
}

const wss = new WebS.WebSocketServer({ port: 8080 }, () => {
    console.log('Server oppened on port 8080');
});

wss.on("connection", (ws, req) => {
    console.log("New Connection!")

    ws.isAlive = true;
    ws.on('pong', heartbeat);

    const interval = setInterval(function ping() {
        console.log('Sending ping...');
        wss.clients.forEach(function each(ws) {
            if (ws.isAlive === false) return ws.terminate();
            ws.isAlive = false;
            ws.ping();
        });
    }, 30000);

    ws.on('message', function incoming(buffer) {
        let msg = buffer.toString();
        console.log(`Received\n ${msg}`);

        wss.broadcast(msg)
    });

    ws.on('close', function close() {
        console.log('Disconnected');
        clearInterval(interval);
    });

});

wss.broadcast = function broadcast(msg) {
    wss.clients.forEach(function each(client) {
        client.send(msg)
    });
};

