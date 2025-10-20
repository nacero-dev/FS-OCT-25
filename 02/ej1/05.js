let prompt = require('prompt-sync')();

function hasS(text){

    /*  
    -convierte el texto a minúsculas con 'toLowerCase()' para hacer la comparación
     sin distinguir mayúsculas/minúsculas.
    -Luego, usa el método 'includes()' para verificar si el texto contiene la letra 's'.
    ! si alguien escribe, por ejemplo, "Sapo" con S mayúscula, includes('s') no lo detectaría... 
    a menos que primero lo conviertas todo a minúsculas. */

    return text.toLowerCase().includes('s');

}

let text =prompt ("Ingrese un Texto: ");

// Usa 'console.log()' para mostrar el resultado.
// La expresión `${hasS(text) ? 'contiene' : 'no contiene'}` es un operador ternario:
// - Si 'hasS(text)' devuelve true, se muestra 'contiene'.
// - Si devuelve false, se muestra 'no contiene'.
console.log(`El texto ingresado ${hasS(text) ? 'contiene' : 'no contiene'} la letra 's'.`);