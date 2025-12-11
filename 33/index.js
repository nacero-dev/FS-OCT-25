// index.js
const express = require('express');
const config = require('./config');

const app = express();

app.get('/', (req, res) => {
  res.send(
    `App: ${config.name} | Entorno: ${config.env} | Mensaje: ${config.message}`
  );
});

app.listen(config.port, () => {
  console.log(
    `Servidor "${config.name}" (${config.env}) escuchando en el puerto ${config.port}`
  );
});
