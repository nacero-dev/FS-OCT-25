const express = require('express');
const mongoose = require('mongoose')
const app = express();
const cors = require('cors');

// Veriables de entorno
const PORT = 3000;
const MONGODB_URI= 'mongodb://localhost:27017/dia25';

// Routers
const indexRouter = require('./routers/indexRouters');
const personsRouter = require('./routers/personsRouters');
const classroomsRouter = require('./routers/classroomRouters');

// Middlewares
const logger = require('./middlewares/logs');
const notFound = require('./middlewares/404');
const internalServerError = require('./middlewares/500');
const auth = require('./middlewares/auth');

// Conexion consola a la base de datos
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true

})

.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB', err));



app.use(express.json());
app.use(cors());
app.use(logger);

// Rutas
app.use('/', indexRouter);
app.use('/persons', personsRouter);
app.use('/classrooms', classroomsRouter);

// Middleware para rutas no encontradas
app.use(notFound);
app.use(internalServerError);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});