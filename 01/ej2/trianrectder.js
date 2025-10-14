// Define la altura del triángulo
const altura = 5;

// Itera desde 1 hasta la altura
for (let i = 1; i <= altura; i++) {
  // Calcula el número de espacios necesarios para justificar a la derecha
  let espacios = " ".repeat(altura - i);

  // Calcula el número de asteriscos
  let asteriscos = "*".repeat(i);

  // Imprime la línea con espacios y asteriscos
  console.log(espacios + asteriscos);
}