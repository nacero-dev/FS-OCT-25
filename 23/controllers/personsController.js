/*
3.5. Controllers

Los controllers son “traductores” entre HTTP y la capa de datos.
Ejemplo createPersonController:
Lee req.body.
Valida campos obligatorios.
Si falta algo → 400.
Si está OK → llama a createPerson(req.body).
Devuelve 201 con el objeto creado.

Idem para update/delete: casi siempre:

Obtener el recurso por id
Si no existe → 404
Si existe → actualizar / eliminar y responder.

*/



const { listPersons, getPerson, createPerson, updatePerson, deletePerson } = require('../models/personsModel');

const listPersonsController = (req, res) => {
    const persons = listPersons();
    res.status(200).json(persons);
}

const getPersonController = (req, res) => {
    const person = getPerson(req.params.id); /*1E. req.params.id*/
    if (!person) return res.status(404).json({ error: 'Person not found' });
    res.status(200).json(person);
}

const createPersonController = (req, res) => {
    const { name, surname, is_teacher, birthdate } = req.body;
    if (!name || !surname || !birthdate) {
        return res.status(400).json({ error: 'Missing fields' });
    }
    res.status(201).json(createPerson(req.body));
}

const updatePersonController = (req, res) => {
    const person = getPerson(req.params.id);
    if (!person) return res.status(404).json({ error: 'Person not found' });
    res.status(201).json(updatePerson(req.params.id, req.body));
}



const deletePersonController = (req, res) => {
    const person = getPerson(req.params.id);

    if (!person) {
        return res.status(404).json({ error: 'Person not found' });
    }

    deletePerson(req.params.id);
    res.json({ message: 'Person deleted' });
}

module.exports = {
    listPersonsController,
    getPersonController,
    createPersonController,
    updatePersonController,
    deletePersonController
};

/*

1E

¿Qué es req.params.id?
Es la forma de obtener un parámetro que viene EN LA URL, definido en la ruta con dos puntos :id.


Ejemplo:
GET /persons/123 Aquí 123 es un URL parameter.
req.params.id   // "123"

¿Cómo sabe Express qué parte es id?
Porque tu router tiene una ruta definida así:
router.get('/:id', getPersonController);

Aquí :id significa: “Cualquier cosa que esté en esa posición de la URL se llamará id.”
Ejemplos válidos:
/persons/123
/persons/abc
/persons/xyz99
Y Express extrae esa parte.


¿Qué contiene req.params?
req.params es un objeto que contiene todos los parámetros definidos en la URL.
Ejemplo: en la ruta:
router.get('/:name/:age', controller);

URL:
/persons/Ana/30

En controller:
req.params

va a ser:

{
  name: "Ana",
  age: "30"
}

¿Por qué .id?

Porque tu ruta define:
'/:id'

Entonces Express crea:
req.params = { id: "lo_que_venga_en_la_url" }

Ejemplo real de tu proyecto:
GET /persons/45

Entonces en tu controller:
req.params.id   // devuelve "45"

¿Cuándo se usa req.params.id?
Siempre en rutas tipo:

GET /persons/:id
PUT /persons/:id
DELETE /persons/:id
GET /classrooms/:id

Ejemplo en tu código:
const person = getPerson(req.params.id);

Esto significa:
“Busca la persona con ese id que viene en la URL.”

5. Diferencia entre params, query y body

| Lugar      | Ejemplo en URL      | Cómo se accede   |
| ---------- | ------------------- | ---------------- |
| **Params** | `/persons/123`      | `req.params.id`  |
| **Query**  | `/persons?name=Ana` | `req.query.name` |
| **Body**   | `{ "name": "Ana" }` | `req.body.name`  |



*/