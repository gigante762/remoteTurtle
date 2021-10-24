---@diagnostic disable: undefined-field, undefined-global

--gambi
if not fs.exists('codes') then
    fs.makeDir('codes')
end

local link = '127.0.0.1:8080'

local ws,err = http.websocket("ws://"..link)

local lastIdeSendedCode = ''

local controllers = {}

local routesMap = {}
routesMap['getComputersPong'] = 'sendComputerConnected'
routesMap['sendCode'] = 'receiveCode'
routesMap['getfiles'] = 'sendFiles'
routesMap['getXmlFromFile'] = 'sendXmlFromFile'
routesMap['deleteFile'] = 'receiveDeleteFile'

local myId = os.getComputerID()..'#'..os.getComputerLabel()

local function computerFinishCodeExecute(request)
    local data = {}
    data.IDEid = request.IDEid
    data.to = request.IDEid
    data.method = 'computerFinishCodeExecute'
    data.computer = myId
    data.fuel = turtle.getFuelLevel()
    ws.send(textutils.serialiseJSON(data))
end


controllers.sendComputerConnected = function(request)
    local data = {}
    data.IDEid = request.IDEid
    data.to = request.IDEid
    data.method = 'computerConnected'
    data.computer = myId
    data.fuel = turtle.getFuelLevel()
    ws.send(textutils.serialiseJSON(data))
end

controllers.sendFiles = function(request)
    local data = {}
    data.files = fs.list('codes')
    data.IDEid = request.IDEid
    data.to = request.IDEid
    data.computer = myId
    data.method = 'computerGetFiles'

    ws.send(textutils.serialiseJSON(data))
end

controllers.receiveCode = function(request)
    --cria um novo arquivo e roda o programa
    local fileC = fs.open('codes/'..request.filename..'.lua','w')
    local fileX = fs.open('codes/'..request.filename..'.xml','w')

    fileC.write(request.code)
    fileX.write(request.xml)

    fileC.close()
    fileX.close()

    --envia os arquivos atualizados
    controllers.sendFiles(request)

    shell.run('codes/'..request.filename)

    computerFinishCodeExecute(request)

end

controllers.sendXmlFromFile = function(request)
    local data = {}
    local xml = fs.open('codes/'..request.file,'r')
    data.xml = xml.readAll()
    data.computer = myId
    data.to = request.IDEid
    data.IDEid = request.IDEid
    data.method = 'computerGetXmlFromFile'

    ws.send(textutils.serialiseJSON(data))
end

controllers.receiveDeleteFile = function(request)
    shell.run('rm codes/'..request.file..'.*')
    
    --envia os arquivos atualizados
    controllers.sendFiles(request)

end

local function route(data)
    if(data.computer == myId or data.computer == 'all') then
        local controllerF = routesMap[data.method]
        if (controllers[controllerF]) then
            controllers[controllerF](data)
        end
    end
end


if ws then
    -- send the computer ID with it label when connect
    -- controllers.sendComputerConnected()

    while true do
        local msg = ws.receive()
        -- print(msg) -- quero ver tudo o que ele recebe
        local success, result =  pcall(function()
            return    textutils.unserializeJSON(msg)
        end)
        if success then
            route(result)
        else
            printError(result)
        end
    end
else
    printError(err)
end
