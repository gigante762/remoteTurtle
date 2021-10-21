--local link = '79d2-186-193-243-109.ngrok.io'
local link = '127.0.0.1:8080'

local ws,err = http.websocket("ws://"..link)
if ws then
    while true do
        local msg = ws.receive()
        --print(msg)
        loadstring(msg)()
        --local obj = json.decode(msg)
        --local func = loadstring(obj["func"])
        --func()
    end
else
    printError(err)
end
