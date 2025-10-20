// Importa el módulo 'prompt-sync' para poder capturar entrada del usuario desde la consola.
// Al ejecutar require('prompt-sync')() se obtiene una función que se asigna a la variable 'prompt'.
 /*https://www.npmjs.com/package/prompt-sync*/

let prompt = require('prompt-sync')();


// Se declara una función llamada 'tablaMultiplicar', sin parámetros.
function tablaMultiplicar() {

     // Solicita al usuario un número usando 'prompt' y lo convierte a "numero entero" con 'parseInt' dado a que lo trae como string
    let numero = parseInt(prompt("ingresa numero oara ver su tabla de multiplicar: "));

    // Imprime en consola el encabezado de la tabla
    console.log(`tabla del  ${numero}:`);

    // Bucle 'for' que va del 1 al 10
    for (let i = 1; i <=10; i++) {

        // Muestra cada línea de la tabla de multiplicar usando template literals
        // Ejemplo: "5 x 1 = 5", "5 x 2 = 10", etc.
        console.log(`${numero} x ${i} = ${numero * i}`);

    }
}

// Llama a la función para que se ejecute al iniciar el programa
tablaMultiplicar();