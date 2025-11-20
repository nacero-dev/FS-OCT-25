/* 2.5 auth (global) → comprueba el header:
Si authorization !== 'Bearer sdkfhgjsdhrupyyvt843yhotgiakenlgjkld'
→ responde 403 y no pasa a las rutas.
Si el token es correcto → next() y sigue.
(Ver explicacion Abajo)
*/

const auth = (req, res, next) => {
    if (req.headers.authorization !== 'Bearer sdkfhgjsdhrupyyvt843yhotgiakenlgjkld') { 
        return res.status(401).json({ /* 1E. abajo*/
            error: 'Unauthorized',
            message: 'Token inválido o ausente'
        });
    }
    next();
};

module.exports = auth;


/*

Revisa req.headers.authorization.
Si el header no coincide exactamente con esa cadena:
responde 403 Forbidden
no pasa al siguiente middleware.
Si coincide → next().
Esto simula autenticación por token tipo Bearer.

1E.
✔ Añade el header:
Content-Type: application/json
✔ Envía la respuesta al cliente
res.setHeader("Content-Type", "application/json");
res.status(403).send(JSON.stringify({
    error: "Forbidden",
    message: "Token inválido o ausente"
}));

Solo que con .json() Express lo hace por ti en una sola línea.


3. ¿Por qué las APIs REST devuelven JSON?

Porque JSON es:
estándar
interoperable
universal (JS, Python, Java, PHP, Go… todos lo leen)
fácil de parsear con fetch o Axios
Y porque cuando tú haces una API moderna, normalmente tu front la consume así:

fetch("/persons")
  .then(res => res.json())
  .then(data => console.log(data));


➡ Si no se envía JSON correctamente la API puede fallar.

 4. ¿Cuándo usar .json()?

Siempre que se envía un objeto como respuesta.

Ejemplos:

res.json({ id: 1, name: "Ana" });
res.status(201).json({ ok: true });
res.status(400).json({ error: "Missing fields" });

Usamos .json() porque:

Queremos devolver un objeto en formato JSON, con el encabezado correcto y garantizando compatibilidad con front-ends modernos y clientes de API.

PARSE "desenredo"

2. JSON.parse() — Para LEER un JSON recibido (JavaScript)

JSON.parse() se usa para convertir un string JSON a objeto JavaScript.
Ejemplo:
const str = '{"name":"Ana","age":30}';
const obj = JSON.parse(str);

console.log(obj.name); // "Ana"
JSON.parse() = convertir un STRING JSON en un OBJETO usable


Cuando se recibe una petición en Express NO se necesita JSON.parse().

¿Por qué?

Porque se ha configurado:
app.use(express.json());


Eso significa:
Express automáticamente hace JSON.parse() del body por ti.

El cliente envía:

{
  "name": "Pedro"
}


En tu ruta puedes hacer:

console.log(req.body.name);
// "Pedro"
➡ No se necesita JSON.parse() porque Express lo hace internamente.


Cuando se usa fetch() en el FRONT-END si se necesitas JSON.parse() pero la forma moderna es:

const response = await fetch("/persons");
const data = await response.json();  // ← ESTO INTERNAMENTE ES UN PARSE

console.log(data);


.json() (del lado del cliente) es un wrapper que hace:
JSON.parse(responseText);
Aquí .json() es otra cosa totalmente distinta
No es Express, es la API Fetch del navegador.


Cuando lees un JSON desde un archivo manualmente
const fs = require("fs");

const raw = fs.readFileSync("data.json", "utf8");
const data = JSON.parse(raw);

console.log(data);
Aquí sí usas JSON.parse() porque el archivo es un string, no un objeto.

Cuando NO usar JSON.parse()
Cuando tu dato ya ES un objeto de JavaScript.
const obj = { name: "Sofia" };

JSON.parse(obj); // ❌ ERROR: obj no es un string JSON



| ¿Qué quiero hacer?                      | ¿Uso `.json()`? | ¿Uso `JSON.parse()`?          |
| --------------------------------------- | --------------- | ----------------------------- |
| **Enviar JSON desde Express**           | ✔ SÍ            | ❌ NO                          |
| **Leer JSON enviado a Express**         | ❌ NO            | ❌ NO (Express lo hace por ti) |
| **Leer JSON en el front-end con fetch** | ✔ `.json()`     | (por dentro hace parse)       |
| **Convertir STRING JSON a OBJETO JS**   | ❌ NO            | ✔ SÍ                          |
| **Convertir OBJETO JS a STRING JSON**   | ❌ `.json()`     | ✔ `JSON.stringify()`          |


*/