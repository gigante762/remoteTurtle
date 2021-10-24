const ws = new WebSocket("ws://127.0.01:8080")
const IDEid = 'id' + Math.random().toString(36).substr(2, 5);

/* Core variables */
let middlewares = []
let controllers = []

ws.addEventListener("message", msg => {
    router(msg)
})

/* Add middlewares to get the msg text and jsonData */
addMiddleware((msg)=>{
    //obj.msg = msg
    let text = msg.data.toString()
    // console.log(text); // quero ver tudo o que chega de mensagem pra esse cliente
    return jsonData = JSON.parse(text)
})

addMiddleware((obj)=>{
    if (obj.method.substr(0,8) != 'computer')
    {
        return false
    }
    return obj
})

// Separar os canais de transmissão por IDE's
addMiddleware((obj)=>{
    if (obj.IDEid != IDEid)
    {
        return false
    }
    return obj
})

/* Add controllers */
addController('computerConnected',(obj)=>{
    addComputerIDIntoSelect(obj.computer)
    if (parseInt(obj.fuel) < 100) {
        alert('Low fuel for turtle ' + obj.computer)
    }
})

addController('computerGetFiles',(obj)=>{
    generateListAquivos(obj.files)
})

addController('computerGetXmlFromFile',(obj)=>{
    generateCodeFromXml(obj.xml)
})

addController('computerFinishCodeExecute',(obj)=>{
    let sendBtn = document.getElementById('sendBtn')
    sendBtn.classList.add('green-signal')
    sendBtn.classList.remove('red-signal')
})

/* Core functions */
function addMiddleware(func)
{
    middlewares.push(func);
}

function addController(name,func)
{
    controllers[name] = func;
}

function router(msg)
{
    let obj = msg
    for(let f of middlewares)
    {
        obj = f(obj)
        if (obj == false)
            return
    }

    let method = obj.method
    if (controllers[method])
    {
        controllers[method](obj)
    }
    else
    {
        // silence 
        //console.warn('Não existe o método',method);
    }
    
}

