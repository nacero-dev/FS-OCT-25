const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

const usersRouter = require('./routers/userRouter');
const dashboardRouter = require('./routers/dashboardRouter');
const notFound = require('./middlewares/404');
const internalServerError = require('./middlewares/500');
const auth = require('./middlewares/auth');

dotenv.config();
const app = express();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use(cors());
app.use(express.json());

// Rutas públicas
app.use('/users', usersRouter);

// Ruta protegida
app.use('/dashboard', auth, dashboardRouter);

// Middlewares de error
app.use(notFound);
app.use(internalServerError);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
