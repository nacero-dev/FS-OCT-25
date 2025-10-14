function imprimirCuadrado(tamaño) {
    let cuadrado = "";
    for (let i = 0; i < tamaño; i++) {
        for (let j = 0; j < tamaño; j++) {
            cuadrado += "*";
        }
        cuadrado += "\n"
    }
    return cuadrado;
}
console.log(imprimirCuadrado(5))
