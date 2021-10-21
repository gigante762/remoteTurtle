function addComputerIDIntoSelect(computerId)
{
    let computersids = document.getElementById('computersids')
    
    let opt = document.createElement('option')
    opt.value = computerId
    opt.innerText = computerId

    computersids.appendChild(opt)

}

function sendCode() {
  let code = Blockly.Lua.workspaceToCode(demoWorkspace)
  let xml =  '<xml>' + Blockly.Xml.workspaceToDom(demoWorkspace).innerHTML + '</xml>'
  let computersids = document.getElementById('computersids')
  let filename = document.getElementById('filename')

  if (filename.value == '')
  {
    alert('File name can\'t be empty')
    return
  }

  ws.send(JSON.stringify({
    //send the computer label
    method: 'func',
    computer: computersids.value,
    code,
    xml:xml,
    filename: filename.value
  }))
}
