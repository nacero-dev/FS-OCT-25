// arranca el servidor, registra middlewares y monta routers
// Ejemplo: GET /classrooms, Authorization: Bearer sdkfhgjsdhrupyyvt843yhotgiakenlgjkld
// 1. llega la petición a express -> middleware globales
// 3. al haber pasado por los middleware se evaluan las rutas ->router
// EXPLICACION HASTA ABAJO DEL ARCHIVO


const express = require('express');
const cors = require('cors'); /*1E. ABAJO*/
const app = express();
const PORT = 3000; /* variables de entorno siempre en MAYUSCULAS COMO PORT*/

// Routers
const personsRouter = require('./routers/personsRouters');
const classroomsRouter = require('./routers/classroomsRouters');

// Middlewares
const logger = require('./middlewares/logs');
const auth = require('./middlewares/auth');
const requestCounter = require('./middlewares/requestCounter');
const timer = require('./middlewares/timer');
const blockIp = require('./middlewares/blockIp');
const notFound = require('./middlewares/404');
const internalServerError = require('./middlewares/500');

app.use(express.json()); // 1.1 parsea el body JSON (para POST/PUT)
app.use(cors({ origin: 'http://127.0.0.1:5500' })); //1.2 permite peticiones desde el front http://127.0.0.1:5500

// Middlewares personalizados
app.use(requestCounter);
app.use(timer);
app.use(blockIp);
app.use(logger);
app.use(auth);

// Rutas 3. dependiendo del get entonce se enruta a la ruta correspondiente solicitando una autorizacion -->routers
app.use('/persons', auth, personsRouter);
app.use('/classrooms', auth, classroomsRouter);

// Middlewares finales
app.use(notFound);
app.use(internalServerError);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

/* 

3. Archivo por archivo

3.1. index.js

Responsabilidades:

Crear el servidor
Conectar middlewares globales
Conectar routers
Lanzar app.listen

Cosas clave:

Configura Express + CORS:
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;


Importa los routers para /persons y /classrooms:

const personsRouter = require('./routers/personsRouters');
const classroomsRouter = require('./routers/classroomsRouters');


Importa middlewares:

const logger = require('./middlewares/logs');
const auth = require('./middlewares/auth');
const requestCounter = require('./middlewares/requestCounter');
const timer = require('./middlewares/timer');
const blockIp = require('./middlewares/blockIp');
const notFound = require('./middlewares/404');
const internalServerError = require('./middlewares/500');

Registro global:

app.use(express.json());
app.use(cors({ origin: 'http://127.0.0.1:5500' }));
app.use(requestCounter);
app.use(timer);
app.use(blockIp);
app.use(logger);
app.use(auth);
Todo pasa por aquí antes de entrar en las rutas.

Rutas:

app.use('/persons', auth, personsRouter);
app.use('/classrooms', auth, classroomsRouter);
Montas routers y vuelves a protegerlos con auth.

Middlewares finales:

app.use(notFound);
app.use(internalServerError);
Si ninguna ruta coincide → 404
Si algún middleware o ruta llama next(err) → 500

1E.

1. Uso de CORS en tu proyecto:

app.use(cors({ origin: 'http://127.0.0.1:5500' }));
Esto significa:
“Solo las páginas web que se ejecuten en http://127.0.0.1:5500 pueden hacer peticiones al backend.”

2. ¿Qué es CORS y por qué existe?

Es una protección del navegador que evita:
robo de datos
peticiones no autorizadas
ataques CSRF
peticiones desde páginas desconocidas
El navegador bloquea la petición automáticamente, a menos que el servidor indique:
“Sí, acepto peticiones desde ese dominio.”

Eso se hace con este header:

*/