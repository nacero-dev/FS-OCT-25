let prompt = require('prompt-sync')();

let numero = parseInt(prompt("Ingrese un numero: "));
let numero2= parseInt(prompt("Ingrese otro numero: "));

let resultado = numero + numero2;

console.log("El resultado de la suma es: "+ resultado);