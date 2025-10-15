let prompt = require('prompt-sync')();

function isOddorEven(number){
    if (number % 2 ===0){
        return "even";
    }
    return "odd";
}

let number = parseInt(prompt("Ingrese un numero: "));
console.log(`El numero ingresado es is ${isOddorEven(number)}.`);
