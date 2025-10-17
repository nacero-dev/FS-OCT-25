// Importa el módulo 'prompt-sync' y lo ejecuta inmediatamente con '()'
// Esto permite usar 'prompt' para capturar entrada del usuario desde la consola
/*require('prompt-sync')() carga la librería y retorna una función que se guarda en prompt.
 Esto solo funciona en entornos que permiten require (como Node.js).
 /*https://www.npmjs.com/package/prompt-sync*/

let prompt = require('prompt-sync')();


// Define una función llamada 'saludar' que recibe un parámetro 'nombre'
function saludar(nombre) {

// Muestra un saludo personalizado en la consola usando interpolación de strings (template literals)
// Las comillas invertidas ` permiten insertar variables dentro del texto con ${variable}.
console.log(`Hola, ${nombre}`);
}

// Define una función llamada 'procesarEntradaUsuario' que recibe una función como parámetro (callback)
function procesarEntradaUsuario(callback) {

  // Solicita al usuario que ingrese su nombre usando 'prompt'
    var nombre = prompt("ingresa nombre: ");

    // Llama a la función pasada como parámetro (callback) y le pasa el 'nombre' como argumento
    //📌 Este patrón se usa mucho en JavaScript: pasar funciones como argumentos para ejecutar acciones
    //  cuando ocurra algo (por ejemplo, después de recibir un dato del usuario).
    callback(nombre);
}

// Llama a 'procesarEntradaUsuario' y le pasa la función 'saludar' como callback
// Esto significa que cuando 'procesarEntradaUsuario' reciba el nombre, ejecutará 'saludar(nombre)'
procesarEntradaUsuario(saludar);