let prompt = require('prompt-sync')();

// Se declara una función llamada 'pow' que recibe un parámetro 'number'.
function pow(number){
    // Retorna el resultado de elevar 'number' a sí mismo usando el operador de potenciación (**).
    return number ** number;
}

// Solicita al usuario que ingrese un número.
// El valor ingresado (que es texto) se convierte a número entero con 'parseInt'.
let number = parseInt(prompt("Ingrese un numero: "));

// Muestra en consola el resultado.
// Usa template literals para insertar variables dentro del texto con `${}`.
// Llama a la función 'pow(number)' y muestra el resultado.
console.log(`El numero ${number} elevado a si mismo es ${pow(number)}.`);
