const jwt = require('jsonwebtoken');
const SECRET = process.env.JWT_SECRET || 'mi_secreto_seguro';

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader)
    return res.status(401).json({ error: 'Token requerido' });

  const token = authHeader.split(' ')[1];
  try {
    const user = jwt.verify(token, SECRET);
    req.user = user;
    next();
  } catch (error) {
    return res.status(403).json({ error: 'Token inválido o expirado' });
  }
};
