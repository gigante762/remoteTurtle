---@diagnostic disable: undefined-field, undefined-global
local link = '127.0.0.1:8080'

local ws,err = http.websocket("ws://"..link)

local controllers = {}

local routesMap = {}
routesMap['sendCode'] = 'receiveCode'
routesMap['getfiles'] = 'sendFiles'
routesMap['getXmlFromFile'] = 'sendXmlFromFile'

local myId = os.getComputerID()..'#'..os.getComputerLabel()

local function sendComputerConnected()
    local data = {}
    data.method = 'computerConnected'
    data.computer = myId
    data.fuel = turtle.getFuelLevel()
    ws.send(textutils.serialiseJSON(data))
end

controllers.sendFiles = function()
    local dados = {}
    dados.files = fs.list('codes')
    dados.computer = myId
    dados.method = 'computerGetFiles'

    ws.send(textutils.serialiseJSON(dados))
end

controllers.receiveCode = function(data)
    --cria um novo arquivo e roda o programa
    local fileC = fs.open('codes/'..data.filename..'.lua','w')
    local fileX = fs.open('codes/'..data.filename..'.xml','w')

    fileC.write(data.code)
    fileX.write(data.xml)

    fileC.close()
    fileX.close()

    --envia os arquivos atualizados
    controllers.sendFiles()

    shell.run('codes/'..data.filename)
end

controllers.sendXmlFromFile = function(data)
    local dados = {}
    local xml = fs.open('codes/'..data.file,'r')
    dados.xml = xml.readAll()
    dados.computer = myId
    dados.method = 'computerGetXmlFromFile'

    ws.send(textutils.serialiseJSON(dados))
end

local function route(data)
    if(data.computer == myId) then
        local controllerF = routesMap[data.method]
        if (controllers[controllerF]) then
            controllers[controllerF](data)
        end
    end
end


if ws then
    -- send the computer ID with it label when connect
    sendComputerConnected()

    while true do
        local msg = ws.receive()
        local data = textutils.unserializeJSON(msg)

        route(data)
    end
else
    printError(err)
end
