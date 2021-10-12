const WebS = require("ws")
const wss = new WebS.WebSocketServer({port:8081})

wss.on("connection",ws =>{
    console.log("connection!")

    ws.on('message', function incoming(buffer) {
        let msg =  buffer.toString();
        console.log('received: ', msg);
        wss.broadcast(msg)
    });
});



wss.broadcast = function broadcast(msg){
    
    wss.clients.forEach(function each(client) {
        client.send(msg)
    });
};