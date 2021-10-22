//event listener
demoWorkspace.addChangeListener(generateLuaCode);

let toggleLuaCode = document.getElementById('toggleLuaCode')
let luaCodeHi = document.getElementById('luaCodeHi')
let blocklyDiv = document.getElementById('blocklyDiv')

toggleLuaCode.addEventListener('click',()=>{
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

let computersids = document.getElementById('computersids')
computersids.addEventListener('change',()=>{

    if( computersids.value == 'none')
    {
        return
    }

   sendGetFiles(computersids.value)
})




