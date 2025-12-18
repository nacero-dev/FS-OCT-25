const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Routers
const usersRouter = require('./routers/userRouter');
const postRouter = require('./routers/postRouter');
const commentRouter = require('./routers/commentRouter');

// Middlewares
const auth = require('./middlewares/auth');
const notFound = require('./middlewares/404');
const internalServerError = require('./middlewares/500');

dotenv.config();

const app = express();

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((error) => console.error('MongoDB error:', error));

// Global middlewares
app.use(cors());
app.use(express.json({ limit: '10mb' }));

// Routes
app.use('/users', usersRouter);
app.use('/posts', postRouter);
app.use('/comments', commentRouter);

// Ejemplo de ruta protegida
app.get('/dashboard', auth, (req, res) => {
  res.json({
    message: 'Protected route',
    user: req.user,
  });
});

// Error handlers
app.use(notFound);
app.use(internalServerError);

module.exports = app;
