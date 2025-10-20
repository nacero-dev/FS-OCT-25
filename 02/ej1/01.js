
/* EJ 1 */

function mostrarPares() {
  for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

mostrarPares();


/*
// Declaración de la función llamada 'mostrarPares'
function mostrarPares() {
  
  // Bucle for que inicializa la variable 'i' en 1,
  // se ejecuta mientras 'i' sea menor o igual a 100,
  // e incrementa 'i' en 1 en cada iteración
  for (let i = 1; i <= 100; i++) {
    
    // Condicional que verifica si el número es par
    // (i % 2 === 0 significa que el residuo de dividir 'i' entre 2 es 0)
    if (i % 2 === 0) {
      
      // Si la condición se cumple, muestra el número en la consola
      console.log(i);
    }
  }
}

// Llamada a la función para que se ejecute
mostrarPares();


Comentario general sobre la sintaxis:

function mostrarPares() { ... } → Declaración de una función tradicional en JavaScript. No recibe parámetros.

for (let i = 1; i <= 100; i++) → Estructura de control iterativa. Usa let para declarar i con alcance de bloque (buena práctica).

if (i % 2 === 0) → Condición que evalúa si un número es par utilizando el operador módulo (%). === se usa para comparar con tipo estricto.

console.log(i); → Muestra los números pares en la consola.

mostrarPares(); → Ejecuta la función.


Inicialización: let i = 1 – Se declara una variable i que comienza en 1.
Condición: i <= 100 – Mientras esta condición sea verdadera, el ciclo continuará.
Incremento: i++ – Después de cada iteración, se suma 1 a i


📦 Alcance de bloque (block scope)

Esto tiene que ver con dónde existe una variable (es decir, desde dónde se puede acceder a ella).
Cuando decimos que una variable tiene alcance de bloque, significa que solo existe dentro del bloque en el que fue declarada. En JavaScript, los bloques están definidos por llaves { }.
Esto pasa porque se usó let. Si hubiéramos usado var, i sí estaría disponible fuera del for, porque var tiene alcance de función, no de bloque. Pero eso puede causar errores, por eso let (y const) se recomienda hoy en día.

*/