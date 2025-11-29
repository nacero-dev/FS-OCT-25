const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Routers
const productosRouter = require('./routers/productosRouters');

// Middlewares
const logger = require('./middlewares/logs');
const notFound = require('./middlewares/404');
const internalServerError = require('./middlewares/500');

const app = express();

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI

// Conexión a MongoDB
mongoose
  .connect(MONGODB_URI)
  .then(() => console.log('Conectado a MongoDB'))
  .catch((err) => {
    console.error('Error conectando a MongoDB', err);
    process.exit(1);
  });

// Middlewares globales
const corsOptions = {
  origin: 'http://localhost:5173', // dirección del frontend Vite
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type']
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(logger);


// Rutas
app.use('/productos', productosRouter);

// 404
app.use(notFound);

// 500
app.use(internalServerError);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
