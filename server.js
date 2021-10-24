const WebS = require("ws")

let IDEsAndTurtles = [];

function heartbeat() {
    this.isAlive = true;
}

const wss = new WebS.WebSocketServer({ port: 8080 }, () => {
    console.log('Server opened on port 8080');
});

wss.on("connection", (ws, req) => {
    console.log("New Connection.")

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
        //console.log(`Received\n ${msg}`);
        
        let data = JSON.parse(msg)
        console.log(data);
        
        /* Send to server, poderia colocar to == 'server' */
        if (data.method == 'ideConnected')
        {
            //console.log('New IDE connected: ' + data.IDEid );
            ws.id = data.IDEid
            ws.isIDE = true
            IDEsAndTurtles[ws.id] = ws;
            return
        }
        else if (data.method == 'computerConnected')
        {
            //console.log('New Turtle connected: ' + data.computer );
            ws.id = data.computer
            ws.isIDE = false
            IDEsAndTurtles[ws.id] = ws;
            IDEsAndTurtles[data.to].send(msg)
            return 
        }

        // route
        if (data.to == 'turtles')
        {
            sendToAllTurtles(msg)
            return
        }
        //enviar para o to
        IDEsAndTurtles[data.to].send(msg)
        
    });

    ws.on('close', function close() {
        console.log('Disconnected');
        IDEsAndTurtles[ws.id] == null;
        clearInterval(interval);
    });

});

wss.broadcast = function broadcast(msg) {
    wss.clients.forEach(function each(client) {
        client.send(msg)
    });
};

function sendToAllTurtles(msg)
{
    wss.clients.forEach(function each(client) {
        if (!client.isIDE)
        {
            client.send(msg)
        }
    });
}

