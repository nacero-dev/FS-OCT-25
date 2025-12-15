const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const auth = async (req, res, next) => {
  try {
    // Verifica que exista el header Authorization
    if (!req.headers.authorization || !req.headers.authorization.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Unauthorized', message: 'Token inválido o ausente' });
    }

    // Extrae el token después de "Bearer "
    const token = req.headers.authorization.split(' ')[1];

    // Verifica el token usando la clave secreta del .env
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Busca al usuario en la base de datos
    const user = await User.findById(decoded.userId);
    if (!user) {
      return res.status(401).json({ error: 'Unauthorized', message: 'Usuario no encontrado' });
    }

    // Guarda el usuario en la request para usarlo en rutas protegidas
    req.user = user;

    // Continua al siguiente middleware o ruta
    next();

  } catch (err) {
    console.error('Auth error:', err.message);
    res.status(401).json({ error: 'Unauthorized', message: 'Token inválido o expirado' });
  }
};

module.exports = auth;
