let prompt = require('prompt-sync')();

/* Se define una función llamada 'areaRectangulo' que recibe dos parámetros: 'base' y 'altura'. */
function areaRectangulo(base, altura){
    /* La función retorna el resultado de multiplicar la base por la altura.*/
    return base*altura;
}

/*'parseFloat' convierte el texto ingresado en un número decimal*/
let base = parseFloat(prompt("Ingrese base: "));
let altura = parseFloat(prompt("Ingrese altura: "));

/*Luego imprime el área en la consola usando template literals.*/
console.log (`el area es: ${areaRectangulo(base, altura)}`);


