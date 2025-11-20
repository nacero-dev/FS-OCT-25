//2.1 incrementa un contador global y muestra: Total requests: X

let count = 0;

const requestCounter = (req, res, next) => {
    count++;
    console.log(`Total requests: ${count}`);
    next(); /* @ para que se usa aqui next */
};

module.exports = requestCounter;


/*

count vive en el módulo → se mantiene entre requests.
Cada request incrementa el contador y lo muestra.
Sirve como ejercicio de estado global en middlewares.


*/