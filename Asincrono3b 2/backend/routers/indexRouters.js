const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    mensaje: 'Bienvenido a la API de gestión de personas y aulas',
    rutas: {
      personas: '/persons',
      aulas: '/classrooms',
    },
  });
});

module.exports = router;