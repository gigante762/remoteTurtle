local link = '127.0.0.1:8080'

local ws,err = http.websocket("ws://"..link)
if ws then
    -- send the computer ID with it label when connect
    local data = {}

    local myId = os.getComputerID()..'#'..os.getComputerLabel()
    data.method = 'computerConnected'
    data.computer = myId
    data.fuel = turtle.getFuelLevel()
    ws.send(textutils.serialiseJSON(data))

    while true do
        local msg = ws.receive()

        local data = textutils.unserializeJSON(msg)

        --just do the action if the message is for you
        if data.method == 'func' then
            if(data.computer == myId) then
                
                --cria um novo arquivo e roda o programa
                local fileC = fs.open('codes/'..data.filename..'.lua','w')
                local fileX = fs.open('codes/'..data.filename..'.xml','w')

                fileC.write(data.code)
                fileX.write(data.xml)

                fileC.close()
                fileX.close()

                shell.run('codes/'..data.filename)
            end
        end
        
        
        
        --local obj = json.decode(msg)
        --local func = loadstring(obj["func"])
        --func()
    end
else
    printError(err)
end
