//event listener
demoWorkspace.addChangeListener(generateLuaCode);

function generateLuaCode() {
  //let area = document.getElementById('luaCodeText')
  let luaCodeHi = document.getElementById('luaCodeHi')
  let code = Blockly.Lua.workspaceToCode(demoWorkspace);
  //area.value = '--Auto generated code \n'+code
  luaCodeHi.innerHTML = hljs.highlight(code, { language: 'lua' }).value
}

let toggleLuaCode = document.getElementById('toggleLuaCode')
let luaCodeHi = document.getElementById('luaCodeHi')
let blocklyDiv = document.getElementById('blocklyDiv')

toggleLuaCode.addEventListener('click',()=>{
    console.log();
    if(luaCodeHi.parentNode.style.display == 'none')
    {
        luaCodeHi.parentNode.style.display = 'block'
        blocklyDiv.style.width = '70%'
    }
    else
    {
        luaCodeHi.parentNode.style.display = 'none'
        blocklyDiv.style.width = '100%'
    }
})




