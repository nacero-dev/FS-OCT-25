let prompt = require('prompt-sync')();

function pow(number){
    return number ** number;
}

let number = parseInt(prompt("Ingrese un numero: "));
console.log(`El numero ${number} elevado a si mismo es ${pow(number)}.`);
