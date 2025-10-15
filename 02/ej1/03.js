let prompt = require('prompt-sync')();

function tablaMultiplicar() {
    let numero = parseInt(prompt("ingresa numero oara ver su tabla de multiplicar:"));
    console.log(`tabla del  ${numero}:`);
    for (let i = 1; i <=10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);

    }
}

tablaMultiplicar();