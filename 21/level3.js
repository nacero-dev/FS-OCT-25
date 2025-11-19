const express = require('express');
const fs = require('fs');
const app = express(); /*2*/
const port = 3000; 

app.use(express.json());
/*se intercambia por app.use(express.text());*/


// Ejemplo de clase: /*1*/
// app.get('/', (req, res) => {
//     fs.readFile('hello.txt', 'utf8', (err, data) => {
//         if (err) throw err;
//         res.status(200).json(JSON.parse(data));
//     });
// });


/*1 mejora: */
/*CAMBIAR PARA EL GET: app.use(express.json());*/
app.get('/', (req, res) => {
    fs.readFile('hello.txt', 'utf8', (err, data) => {
        if (err) throw err;

        try {
            // Intentar parsear como JSON
            const json = JSON.parse(data);
            res.status(200).json(json);
        } catch (error) {
            // Si no es JSON, enviarlo como texto
            res.status(200).send(data);
        }
    });
});


// ver video 21:55 como se configura en postman json y uso de { " ": " ", " ":" "}
// hay pequeños errores pero despues lo explica en 22:00 

app.post('/', (req, res) => {
    fs.writeFile('hello.txt', JSON.stringify(req.body), (err) => { /* stringify: {"mensaje":"Antonio!!","autor":"Ernsesto"}*/
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


// Level3 intenta parsear el archivo como JSON, pero el archivo contiene texto plano:

// Hello, World 2!


// y Express intenta hacer:

// JSON.parse("Hello, World 2!\n")


// Esto explota porque Hello, World 2! no es JSON válido.

// De ahí el error:

// SyntaxError: Unexpected token H in JSON at position 0

// ¿Por qué level1 funciona pero level3 NO?

// Porque:

// Level1 escribe texto plano → OK

// Level3 espera JSON, no texto → CRASH

// Tus POST en level3 guardan JSON así:

// {"nombre":"Nicolas"}


// pero level1 guarda esto:

// Hello, World 2!


// que NO es JSON y por eso revienta.

// ⭐ SOLUCIÓN 1 (la correcta para tu ejercicio):
// Modificar level3 para que NO intente parsear JSON cuando no es JSON

// Cambia este GET:

// app.get('/', (req, res) => {
//     fs.readFile('hello.txt', 'utf8', (err, data) => {
//         if (err) throw err;
//         res.status(200).json(JSON.parse(data));
//     });
// });


// Por esto:

// app.get('/', (req, res) => {
//     fs.readFile('hello.txt', 'utf8', (err, data) => {
//         if (err) throw err;

//         try {
//             // Intentar parsear como JSON
//             const json = JSON.parse(data);
//             res.status(200).json(json);
//         } catch (error) {
//             // Si no es JSON, enviarlo como texto
//             res.status(200).send(data);
//         }
//     });
// });


/* 

por que express?

✅ 📌 Por qué en Level 1 NO necesitas instalar nada

Level 1 usa:

const fs = require('fs');


✔ fs es un módulo nativo de Node.js
✔ Viene instalado dentro de Node
✔ No hay que instalar nada con npm

Es como usar console.log, ya viene en Node.

Por eso:
👉 NO necesitas npm install fs
👉 NO necesitas dependencias externas

✅ 📌 Por qué en Level 2 TAMPOCO necesitas instalar nada

Level 2 usa:

const http = require('http');


✔ http también es un módulo nativo de Node.js
✔ Viene incluido en Node
✔ Se usa para crear servidores básicos sin librerías externas

Por eso:
👉 NO necesitas npm install http


Versión Node puro (mala experiencia):
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ mensaje: 'Hola' }));
    }
});

Versión Express (bonita, limpia, moderna):
app.get('/', (req, res) => {
    res.json({ mensaje: 'Hola' });
});


Express sirve para crear APIs y servidores de forma profesional, limpia y escalable.
➤ http solo sirve para ejemplos simples o aprendizaje inicial.
*/
