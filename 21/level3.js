const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    fs.readFile('hello.txt', 'utf8', (err, data) => {
        if (err) throw err;
        res.status(200).json(JSON.parse(data));
    });
});

app.post('/', (req, res) => {
    fs.writeFile('hello.txt', JSON.stringify(req.body), (err) => {
        if (err) throw err;
        res.status(201).send('File has been created');
    });
});

app.delete('/', (req, res) => {
    fs.unlink('hello.txt', (err) => {
        if (err) throw err;
        res.status(200).send('File has been deleted');
    });
});

app.listen(port, () => {
    console.log(`Lo que me de la gana esta en http://localhost:${port}`);
});
