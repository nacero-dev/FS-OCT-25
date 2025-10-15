let prompt = require('prompt-sync')();

function hasS(text){
    return text.toLowerCase().includes('s');

}

let text =prompt ("Ingrese un Texto: ");

console.log(`El texto ingresado ${hasS(text) ? 'contiene' : 'no contiene'} la letra 's'.`);