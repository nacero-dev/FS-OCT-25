/*Entrada principal del servidor*/

const express = require('express');
const app = express(); /*Crea la app de Express.*/
const cors = require('cors'); /*Activa CORS para permitir que el frontend (otro puerto) llame al servidor.*/
const PORT = 3000; /*Pone a escuchar el servidor en un puerto (por ejemplo 3000).*/

// Routers
const indexRouter = require('./routers/indexRouters');
const personsRouter = require('./routers/personsRouters'); /*Conecta las rutas (/persons).*/
const classroomsRouter = require('./routers/classroomRouters'); /*Conecta las rutas (/classrooms).*/

/*  Configura middlewares globales.*/
const logger = require('./middlewares/logs');
const notFound = require('./middlewares/404');
const internalServerError = require('./middlewares/500');
const auth = require('./middlewares/auth');

app.use(express.json());
app.use(cors());
app.use(logger);

// Rutas
app.use('/', indexRouter);
app.use('/persons', personsRouter);
app.use('/classrooms', classroomsRouter);

// Middleware para rutas no encontradas
app.use(notFound);
app.use(internalServerError);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

/*

El flujo típico es:
1. Llega una petición HTTP (por ejemplo GET /persons desde el frontend).
2. Pasa por estos middlewares en orden:

-express.json() → convierte el body JSON en req.body.
-cors(...) → permite peticiones desde el origen del frontend.
-logger → escribe en consola qué IP, método y URL llegaron.
-auth → comprueba que el header Authorization tenga el token correcto.
-(otros que tengas: contador, timer, bloqueo de IP…)

3.Si todo está bien, se deriva a la ruta correspondiente:
/persons → personsRouters
/classrooms → classroomsRouters

Si ninguna ruta coincide → 404.js.
Si algo lanza un error que no se controla → 500.js.




*/