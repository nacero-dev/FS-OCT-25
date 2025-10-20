let prompt = require('prompt-sync')();

function saludar(nombre) {
  console.log(`Hola, ${nombre}`);
}

// Esta función imprime un mensaje de despedida en la consola.
function despedida(nombre) {
  console.log(`Adios, ${nombre}`);
}

function procesarEntradaUsuario(callback) {
    var nombre = prompt("ingresa nombre: ");
    callback(nombre);
}

procesarEntradaUsuario(despedida);

/* misma estructura que el 02 */