require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Routers
const indexRouter = require('./routers/indexRouters');
const personsRouter = require('./routers/personsRouters');
const classroomsRouter = require('./routers/classroomRouters');

// Middlewares
const logger = require('./middlewares/logs');
const notFound = require('./middlewares/404');
const internalServerError = require('./middlewares/500');
const auth = require('./middlewares/auth');

// Inicialización de Express
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger);

// Variables de entorno
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;


mongoose
  .connect(MONGO_URI)
  .then(() => console.log('Conectado correctamente a MongoDB Atlas'))
  .catch((error) => {
    console.error('Error al conectar con MongoDB:', error.message);
    process.exit(1); // Detiene la app si no puede conectar
  });


app.use('/', indexRouter);
app.use('/persons', personsRouter);
app.use('/classrooms', classroomsRouter);


app.use(notFound);
app.use(internalServerError);


app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});
