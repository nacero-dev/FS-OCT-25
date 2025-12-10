const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const verifyToken = require('../middleware/authMiddleware');

// Listar usuarios
router.get('/', verifyToken, async (req, res) => {
  if (!req.user.isAdmin) return res.status(403).json({ error: 'Solo admin' });
  try {
    const users = await User.find().select('-password'); // ocultamos contraseñas
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
});

// Crear usuario
router.post('/', verifyToken, async (req, res) => {
  if (!req.user.isAdmin) return res.status(403).json({ error: 'Solo admin' });
  try {
    const { email, password, isAdmin } = req.body;
    const hashed = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashed, isAdmin });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear usuario' });
  }
});

// Editar usuario (por ejemplo cambiar rol)
router.put('/:id', verifyToken, async (req, res) => {
  if (!req.user.isAdmin) return res.status(403).json({ error: 'Solo admin' });
  try {
    const updated = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar usuario' });
  }
});

// Eliminar usuario
router.delete('/:id', verifyToken, async (req, res) => {
  if (!req.user.isAdmin) return res.status(403).json({ error: 'Solo admin' });
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: 'Usuario eliminado' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar usuario' });
  }
});

module.exports = router;
