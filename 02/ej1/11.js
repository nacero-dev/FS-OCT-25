let prompt = require('prompt-sync')();

function pow(base, exponent){
    return base ** exponent;
}

let base = parseInt(prompt("Ingrese un numero: "));
let exponent = parseInt(prompt("Ingrese exponente: "));
console.log(`El numero ${base} elevado a ${exponent} es ${pow(base, exponent)}.`);
