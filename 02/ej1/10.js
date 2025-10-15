let prompt = require('prompt-sync')();

function areaCirculo(radio){;
    return Math.PI * radio **2;
}

let radio = parseFloat(prompt("Ingrese radio: "));
console.log (`el area es: ${areaCirculo(radio)}`);


