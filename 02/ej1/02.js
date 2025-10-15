let prompt = require('prompt-sync')();

function saludar(nombre) {
  console.log(`Hola, ${nombre}`);
}

function procesarEntradaUsuario(callback) {
    var nombre = prompt("ingresa nombre: ");
    callback(nombre);
}

procesarEntradaUsuario(saludar);