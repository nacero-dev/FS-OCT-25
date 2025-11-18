const express = require('express');
const app = express();
const port = 3000;

const personsRouter = require('./routers/personsRouters');
const classroomsRouter = require('./routers/classroomsRouters');

app.use(express.json());

app.use('/persons', personsRouter);
app.use('/classrooms', classroomsRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
