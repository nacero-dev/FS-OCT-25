/* "##" ruta de repaso 1. */

const express = require('express');
const mongoose = require('mongoose')
const app = express();
const cors = require('cors');

// Veriables de entorno
const PORT = 3000;
// const MONGODB_URI= 'mongodb://localhost:27017/dia25'
const MONGODB_URI= 'mongodb+srv://nicolasacero2023:Odesa1234@cluster0.jecail7.mongodb.net/dia25?appName=Cluster0'; //aqui se pone la URL del nivel 2

// Routers
const indexRouter = require('./routers/indexRouters');
const personsRouter = require('./routers/personsRouters');
const classroomsRouter = require('./routers/classroomRouters');

// Middlewares
const logger = require('./middlewares/logs');
const notFound = require('./middlewares/404');
const internalServerError = require('./middlewares/500');
const auth = require('./middlewares/auth');

// Conexion consola a la base de datos
mongoose.connect(MONGODB_URI)

.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB', err));



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

/* index.js → Configuración inicial de MongoDB (Nivel 1 + 2)

1.

Antes:
index.js solo levantaba Express, sin conexión externa.

Ahora:
const mongoose = require('mongoose');
const MONGODB_URI = 'mongodb+srv://.../dia25?appName=Cluster0';

mongoose.connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

Esto cumple:

Nivel 1: Instala e integra Mongoose.

Nivel 2: Usa la connection string de Atlas (tu clúster remoto).
Ahora cada vez que ejecutas node index.js, tu app se conecta automáticamente a tu base remota.


*/