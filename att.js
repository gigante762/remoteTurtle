
/* Esse código pega todos os códigos que estão na pasta 
turtle e copia para dentro de todos os computadores
basta colocar a base e o save
*/

const fs = require("fs")

let save = 'testcc'
let base = `C:\\Users\\kevin\\AppData\\Roaming\\.minecraft\\saves\\${save}\\computercraft\\computer\\`


let pastasDosPcs = fs.readdirSync(base)
let codigosTurtle = fs.readdirSync('turtle')
console.log(pastasDosPcs);
console.log(codigosTurtle);

for (pasta of pastasDosPcs) {
    for (code of codigosTurtle) {
        fs.copyFileSync(`turtle/${code}`,base+pasta+'\\'+code)
        console.log(`copy ${code} to ${base+pasta}`);
    }
}