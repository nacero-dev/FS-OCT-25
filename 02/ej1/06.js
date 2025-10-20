let prompt = require('prompt-sync')();

// Se declara una función llamada 'isOddorEven' que recibe un parámetro llamado 'number'.
function isOddorEven(number){

    // Se evalúa si el número es divisible por 2 (es decir, si el residuo es 0).
    // El operador % (módulo) devuelve el residuo de la división.

    if (number % 2 ===0){
        // Si la condición se cumple, el número es par (even).
        return "even";
    }

    // Si no se cumple, el número es impar (odd).
    return "odd";
}


// Se solicita al usuario que ingrese un número, y se convierte a entero usando 'parseInt'.
let number = parseInt(prompt("Ingrese un numero: "));

// Se muestra en consola el resultado llamando a la función 'isOddorEven' con el número ingresado.
// Se usa un template literal para incluir el resultado dentro del mensaje.
console.log(`El numero ingresado es is ${isOddorEven(number)}.`);
