const fs = require('fs');

// Level 1 - 1
// Crea un archivo llamado 'hello.txt' con el contenido 'Hello, World!\n'
fs.writeFile('hello.txt', 'Hello, World!\n', (err) => {
    if (err) throw err;
    console.log('File has been created');
});

// Level 1 - 2
// Lee el contenido del archivo 'hello.txt' y lo muestra en la consola
fs.readFile('hello.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

// Level 1 - 3
// Elimina el archivo 'hello.txt'
fs.unlink('hello.txt', (err) => {
    if (err) throw err;
    console.log('File has been deleted');
});
