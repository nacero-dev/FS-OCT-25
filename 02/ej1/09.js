let prompt = require('prompt-sync')();

function areaTriangulo(base, altura){;
    return (base*altura)/2;
}

let base = parseFloat(prompt("Ingrese base: "));
let altura = parseFloat(prompt("Ingrese altura: "));


console.log (`el area es: ${areaTriangulo(base, altura)}`);


