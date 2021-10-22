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
    method: 'sendCode',
    computer: computersids.value,
    code,
    xml:xml,
    filename: filename.value
  }))

}

function sendGetFiles(computerID) {

  ws.send(JSON.stringify({
    //send the computer label
    method: 'getfiles',
    computer: computerID
  }))

}

function sendGetXmlFromfile(computerID,file) {

  ws.send(JSON.stringify({
    //send the computer label
    method: 'getXmlFromFile',
    computer: computerID,
    file:file+'.xml'
  }))

}

function generateListAquivos(arrayFiles)
{
  let filesystem = document.getElementById('filesystem')

  filesystem.innerHTML = ''
  files = arrayFiles.filter((f)=>f.split('.')[1]=='xml')
  files = files.map((f)=>f.split('.')[0])


  for(let file of files)
  {
    let li = document.createElement('li')
    li.innerText = file

    filesystem.appendChild(li)
  }

  let filesystemLis = document.querySelectorAll('#filesystem li')
  let computersids = document.getElementById('computersids')

  Array.from(filesystemLis).forEach((e)=>{
      e.addEventListener('click',()=>{
          sendGetXmlFromfile(computersids.value,e.innerText)
          document.getElementById('filename').value = e.innerText.split('.')[0]
      })
  })
}

function generateCodeFromXml(xml)
{
  xml = xml.replace('<xml>')
  xml = xml.replace('</xml>')
  let domXml = document.createElement('xml')
  domXml.innerHTML = xml
  //document.getElementById('workspaceBlocks').innerHTML = xml
  Blockly.Xml.domToWorkspace(domXml, demoWorkspace);
  //Blockly.Xml.domToWorkspace(xml, demoWorkspace);

}

function generateLuaCode() {
  //let area = document.getElementById('luaCodeText')
  let luaCodeHi = document.getElementById('luaCodeHi')
  let code = Blockly.Lua.workspaceToCode(demoWorkspace);
  //area.value = '--Auto generated code \n'+code
  luaCodeHi.innerHTML = hljs.highlight(code, { language: 'lua' }).value
}