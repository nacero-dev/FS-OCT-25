const fs = require('fs');

// Level 1 - 1
// Crea un archivo llamado 'hello.txt' con el contenido 'Hello, World!\n'
fs.writeFile('hello.txt', 'Hello, World 2!\n', (err) => {
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
// fs.unlink('hello.txt', (err) => {
//     if (err) throw err;
//     console.log('File has been deleted');
// });

/*| Acción                                          | Significado                                              |
| ----------------------------------------------- | -------------------------------------------------------- |
| Instalar nodemon                                | `npm install nodemon`                                    |
| Instalar nodemon como dependencia de desarrollo | `npm install -D nodemon`                                 |
| Ejecutarlo                                      | `nodemon index.js` o `npm run dev`                       |
| Para qué sirve                                  | Reinicia tu servidor automáticamente al detectar cambios |

asegurar en package.json:

"scripts": {
  "dev": "nodemon index.js"
}

*/