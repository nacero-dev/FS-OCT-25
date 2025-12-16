require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');

async function createUser() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Mongo conectado');

    const email = 'admin@correo.com';
    const password = '123456';

    const exists = await User.findOne({ email });
    if (exists) {
      console.log('El usuario ya existe');
      process.exit(0);
    }

    const hashed = await bcrypt.hash(password, 10);

    const user = new User({
      email,
      password: hashed,
      isAdmin: true,
    });

    await user.save();
    console.log('USUARIO ADMIN CREADO CORRECTAMENTE');
    process.exit(0);
  } catch (err) {
    console.error('ERROR:', err);
    process.exit(1);
  }
}

createUser();
