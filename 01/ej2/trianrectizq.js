function crearTrianguloRecto(altura) {
  for (let i = 1; i <= altura; i++) {
    let linea = '';
    for (let j = 0; j < i; j++) {
      linea += '*';
    }
    console.log(linea);
  }
}

crearTrianguloRecto(5);