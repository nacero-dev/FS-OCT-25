const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');


const {
  register,
  login,
  getProfile
} = require('../controllers/userController');

// Registro
router.post('/register', register);

// Login
router.post('/login', login);

// Perfil (ejemplo protegido)
router.get('/me', auth, getProfile);

module.exports = router;
