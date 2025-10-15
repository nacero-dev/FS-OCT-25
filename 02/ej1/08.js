let prompt = require('prompt-sync')();

function areaRectangulo(base, altura){;
    return base*altura;
}

let base = parseFloat(prompt("Ingrese base: "));
let altura = parseFloat(prompt("Ingrese altura: "));
console.log (`el area es: ${areaRectangulo(base, altura)}`);


