/* "##" 2. */

const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name: { type: String, required:true },
    surname: {type: String, required: true},
    is_teacher: {type: Boolean, default: false},
    birthdate: { type: Date, required: true}
});

const Person = mongoose.model('Person', personSchema);
module.exports = Person;

        // id: uuidv4(),
        // name,
        // surname,
        // is_teacher: is_teacher || 'false',
        // birthdate

/* 
Modelo Mongoose para personas

Antes:
personsCSV.js tenía funciones manuales para leer y escribir CSV.

Ahora:
const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  is_teacher: { type: Boolean, default: false },
  birthdate: { type: Date, required: true }
});
const Person = mongoose.model('Person', personSchema);
✅ Esto reemplaza el CSV por una colección MongoDB llamada persons.
Cada documento tiene reglas (tipo y obligatoriedad).
El modelo Person ahora permite:

Person.find()        // listar
Person.findById(id)  // obtener uno
Person.create(data)  // crear
Person.deleteOne()   // borrar

estos métodos (find, findById, create), los define automaticamente mongoose cuando se define un modelo como el de const personSchema (arriba)

¿Qué hace Mongoose aquí?
const Person = mongoose.model('Person', personSchema);

Mongoose crea un modelo que representa una colección en tu base de datos (persons),
y automáticamente te da un conjunto de métodos listos para usar.

Métodos disponibles en el modelo Person
| Método                      | Qué hace                                      | Ejemplo                                                                            |
| --------------------------- | --------------------------------------------- | ---------------------------------------------------------------------------------- |
| `.find()`                   | Devuelve todos los documentos de la colección | `const all = await Person.find();`                                                 |
| `.findById(id)`             | Busca una persona por su `_id`                | `const p = await Person.findById("674c123...");`                                   |
| `.create(data)`             | Inserta un nuevo documento                    | `await Person.create({ name: "Ana", surname: "López", birthdate: "1990-01-01" });` |
| `.deleteOne({ _id })`       | Elimina un documento específico               | `await Person.deleteOne({ _id: "674c123..." });`                                   |
| `.updateOne({ _id }, data)` | Actualiza un documento                        | `await Person.updateOne({ _id }, { name: "Nuevo nombre" });`                       |

*/