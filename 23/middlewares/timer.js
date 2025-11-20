// 2.2 registra start = Date.now(), y al terminar la respuesta calcula cuánto tardó.

const timer = (req, res, next) => {
    const start = Date.now();

    res.on('finish', () => {
        const duration = Date.now() - start;
        console.log(`Request ${req.method} ${req.url} took ${duration}ms`); /*8. console.log(`Request GET /classrooms took Xms`); finaliza la peticion -->"9 !ver 500.js middleware"*/
    });

    next();
};

module.exports = timer;

/*

Marca el tiempo al inicio (start).
Cuando Express acaba la respuesta (finish), calcula cuanto tardó.
No interfiere con la lógica de la ruta, solo observa.

${req.method}  Es el método HTTP de la petición:
Express lo rellena automáticamente.

${req.url} es la ruta completa que pidió el cliente
en GET /persons?page=2 sería /persons?page=2


${duration}
👉 duration es una variable interna del servidor, creada en tu middleware:


Query params SOLO existen en la URL
Un query param es algo que va después de un signo de interrogación en la URL.

Ejemplo:
GET /persons?duration=10


Aquí SÍ es un query param.
duration → clave
10 → valor

*/