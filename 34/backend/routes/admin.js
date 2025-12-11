const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authMiddleware');

router.get('/', verifyToken, (req, res) => {
  if (!req.user.isAdmin)
    return res.status(403).json({ error: 'Acceso no autorizado (solo admin)' });

  res.json({ message: 'Contenido admin visible solo para administradores' });
});

module.exports = router;
