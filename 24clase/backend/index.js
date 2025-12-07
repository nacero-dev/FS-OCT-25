/*Entrada principal del servidor*/

const express = require('express'); /*Importa la librería Express.*/
const app = express(); /*Crea la app de servidor de Express.*/
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

app.use(express.json()); /*Permite que Express entienda JSON en el cuerpo de las peticiones (req.body).*/
app.use(cors());
app.use(logger);

// Rutas
app.use('/', indexRouter);
app.use('/persons', personsRouter); /*Cualquier petición que empiece con /persons se redirige al router personsRouter.*/
app.use('/classrooms', classroomsRouter);

// Middleware para rutas no encontradas
app.use(notFound);
app.use(internalServerError);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`); /*Enciende el servidor, escuchando el puerto 3000.*/
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


El archivo donde “vive” tu servidor Express
El corazón de Express está en tu index.js dentro de backend/.

Ese archivo normalmente tiene algo así (te lo muestro adaptado a tu caso):
// backend/index.js

// 1. Importar la librería Express
const express = require('express');
const cors = require('cors');

// 2. Crear la app de Express
const app = express();
const PORT = 3000;

// 3. Importar los routers
const personsRouter = require('./routers/personsRouters');
const classroomsRouter = require('./routers/classroomsRouters');

// 4. Middlewares globales
app.use(express.json()); // Para leer JSON del body
app.use(cors({ origin: 'http://localhost:5173' })); // Permite conexión del frontend

// 5. Usar los routers
app.use('/persons', personsRouter);
app.use('/classrooms', classroomsRouter);

// 6. Arrancar el servidor
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


Cómo se comunican todos los niveles
Frontend (React) → Backend (Express) → CSV (datos)

1. React hace:
fetch("http://localhost:3000/persons")

2. Express recibe la petición.
3. index.js la pasa a personsRouter.
4. personsRouter detecta GET / → ejecuta listPersonsController.
5. listPersonsController llama a listPersons() (model).
6. listPersons() lee el CSV y devuelve los datos.
7. res.json(persons) envía los datos al navegador.
8. React los pinta en la pantalla.


¿Por qué usar Express?

Porque te da una estructura clara y poderosa para manejar todo esto:

1. Rutas (app.get, app.post, etc.)
2. Parámetros (req.params)
3. Cuerpo de la petición (req.body)
4. Middlewares (app.use(...))
5. Errores (next(err) o res.status(500))








*/