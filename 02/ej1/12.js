
let prompt = require('prompt-sync')();

// Aplicación para mostrar los primeros 10 números de la serie de Fibonacci 

function mostrarSerieFibonacci(cantidad) {

    /* Se crea un arreglo llamado 'fibonacci' con los dos primeros valores de la serie. */
    let fibonacci = [0, 1];


    /*   Bucle que genera los siguientes números de la serie hasta alcanzar la cantidad solicitada. */

    for (let i = 2; i < cantidad; i++) {
        
        /* Cada nuevo número es la suma de los dos anteriores.*/
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }

    console.log("Los primeros 10 números de la serie de Fibonacci son:");
    console.log(fibonacci.join(", "));

}

let cantidad = prompt("Ingrese la cantidad de números de la serie de Fibonacci que desea ver (mínimo 10): "); 
cantidad = Math.max(10, parseInt(cantidad));
mostrarSerieFibonacci(cantidad);