
let prompt = require('prompt-sync')();

// Aplicación para mostrar los primeros 10 números de la serie de Fibonacci 

function mostrarSerieFibonacci(cantidad) {

    let fibonacci = [0, 1];

    for (let i = 2; i < cantidad; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }

    console.log("Los primeros 10 números de la serie de Fibonacci son:");
    console.log(fibonacci.join(", "));

}

let cantidad = prompt("Ingrese la cantidad de números de la serie de Fibonacci que desea ver (mínimo 10): "); 
cantidad = Math.max(10, parseInt(cantidad));
mostrarSerieFibonacci(cantidad);