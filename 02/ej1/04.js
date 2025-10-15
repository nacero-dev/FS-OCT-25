let prompt = require('prompt-sync')();

function saludar(nombre) {
  console.log(`Hola, ${nombre}`);
}

function despedida(nombre) {
  console.log(`Adios, ${nombre}`);
}

function procesarEntradaUsuario(callback) {
    var nombre = prompt("ingresa nombre: ");
    callback(nombre);
}

procesarEntradaUsuario(despedida);