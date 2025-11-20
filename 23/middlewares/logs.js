/* 2.4 Registrar información de cada petición que llega al servidor.
Cuándo llegó la petición (fecha/hora exacta)
Qué método se usó (GET, POST, PUT, DELETE…)
Qué recurso se pidió (la URL)
Desde qué IP llegó
(Explicacion abajo)
*/

const logger = (req, res, next) => {
    const now = new Date().toISOString();
    console.log(`[${now}] ${req.method} ${req.url} - IP: ${req.ip}`);
    next();
};


/*

Tiene 3 datos clave:

fecha y hora (now) ${now}
método (GET, POST, etc.) ${req.method}
URL (/persons, /classrooms/123) ${req.url}
IP del cliente ${req.ip}
Es un middleware de logging básico.

*/