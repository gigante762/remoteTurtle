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
  let sendBtn = document.getElementById('sendBtn')

  if (!sendBtn.classList.contains('green-signal'))
  {
    return
  }
  
  sendBtn.classList.toggle('green-signal')
  sendBtn.classList.toggle('red-signal')

  if (filename.value == '')
  {
    sendBtn.classList.toggle('green-signal')
    sendBtn.classList.toggle('red-signal')
    alert('File name can\'t be empty')
    return

  }

  ws.send(JSON.stringify({
    //send the computer label
    method: 'sendCode',
    computer: computersids.value,
    code,
    xml:xml,
    filename: filename.value,
    IDEid,
    to:computersids.value
  }))

}

function sendGetFiles(computerID) {

  ws.send(JSON.stringify({
    //send the computer label
    method: 'getfiles',
    computer: computerID,
    IDEid,
    to:computerID
  }))

}

function sendGetXmlFromfile(computerID,file) {

  ws.send(JSON.stringify({
    //send the computer label
    method: 'getXmlFromFile',
    computer: computerID,
    file:file+'.xml',
    IDEid,
    to:computerID
  }))

}

function generateListAquivos(arrayFiles)
{

  if (!arrayFiles.length)
  {
    arrayFiles = []
  }
  
  let filesystem = document.getElementById('filesystem')

  filesystem.innerHTML = ''

  // foo.lua , foo.xml => foo
  files = arrayFiles.filter((f)=>f.split('.')[1]=='xml')
  files = files.map((f)=>f.split('.')[0])


  for(let file of files)
  {

    let div = document.createElement('div')
    div.classList.add('div-file', 'flex-row')
    
    let li = document.createElement('li')
    li.setAttribute('file',file)
    li.setAttribute('onclick',`onclickGetXmlFromFile(this,'${file}')`)
    li.innerText = file
    
    let span = document.createElement('span')
    span.setAttribute('file',file)
    span.setAttribute('onclick',`onclickDeleteFile(this,'${file}')`)
    span.innerText = 'x'

    div.appendChild(li)
    div.appendChild(span)

    filesystem.appendChild(div)
  }
}

function onclickGetXmlFromFile(el,fileName)
{
  unSelectAllFiles()
  el.classList.add('fileSelected')
  sendGetXmlFromfile(computersids.value, fileName)
  document.getElementById('filename').value = fileName
}

function onclickDeleteFile(el,fileName)
{
  let res = confirm('Delete the file '+fileName+' ?')

  if(res)
  {
    el.parentNode = null
    sendDeleteFile(computersids.value, fileName)
  }
}

function unSelectAllFiles()
{
  let filesystemLis = document.querySelectorAll('#filesystem li')
  Array.from(filesystemLis).forEach((e)=>{
    e.classList.remove('fileSelected')
  })
}

function generateCodeFromXml(xml)
{
  xml = xml.replace('<xml>')
  xml = xml.replace('</xml>')
  let domXml = document.createElement('xml')
  domXml.innerHTML = xml
  //document.getElementById('workspaceBlocks').innerHTML = xml
  Blockly.Xml.clearWorkspaceAndLoadFromXml(domXml, demoWorkspace);
  //Blockly.Xml.domToWorkspace(xml, demoWorkspace);

}

function generateLuaCode() {
  //let area = document.getElementById('luaCodeText')
  let luaCodeHi = document.getElementById('luaCodeHi')
  let code = Blockly.Lua.workspaceToCode(demoWorkspace);
  //area.value = '--Auto generated code \n'+code
  luaCodeHi.innerHTML = hljs.highlight(code, { language: 'lua' }).value
}

function sendComputersPing() {

  ws.send(JSON.stringify({
    //send the computer label
    method: 'getComputersPong',
    computer: 'all',
    IDEid,
    to:'turtles'
  }))
}

function sendDeleteFile(computerID, file)
{
  ws.send(JSON.stringify({
    //send the computer label
    method: 'deleteFile',
    computer: computerID,
    file:file,
    IDEid,
    to:computerID
  }))
}

function sendIDEConnected() {

  ws.send(JSON.stringify({
    //send the computer label
    method: 'ideConnected',
    IDEid,
    to:'server'
  }));

  // wait 2 seconds and get computers connecteds
  //getComputersPong
  setTimeout(sendComputersPing,2000);
}