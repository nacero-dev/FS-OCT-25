const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin');
const usersRoutes = require('./routes/users');

const app = express();

app.use(cors());
app.use(express.json());

// rutas públicas
app.use('/api', authRoutes);

// rutas protegidas
app.use('/api/admin', adminRoutes);
app.use('/api/users', usersRoutes);

app.get('/', (req, res) => {
  res.send('Servidor JWT activo');
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB conectado'))
  .catch(err => console.error(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));
