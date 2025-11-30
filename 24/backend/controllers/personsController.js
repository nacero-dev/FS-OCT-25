const { listPersons, getPerson, createPerson, updatePerson, deletePerson } = require('../models/personsModel');

const listPersonsController = (req, res) => {
    const persons = listPersons();
    res.status(200).json(persons);
}

const getPersonController = (req, res) => {
    const person = getPerson(req.params.id);
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

    deletePerson(req.params.id)
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

@ no entiendo muy bien para que sirve el controller

Controllers – Traducen HTTP ↔ lógica de datos
En backend/controllers tienes:
personsController.js
classroomsController.js
Cada controller:
Lee parámetros de la petición:
req.params (por ejemplo id en /persons/:id)
req.body (datos enviados en POST/PUT)
Valida campos obligatorios:
si falta algo → responde 400 Bad Request
Llama al modelo correspondiente (personsModel, classroomModel).
Devuelve la respuesta en JSON (res.status(...).json(...)).
Ejemplo mental:
createPersonController:
Lee name, surname, birthdate, is_teacher de req.body.
Si falta name o surname o birthdate → 400 con error.
Si todo está ok → createPerson(req.body).
Devuelve 201 con la persona creada.

Los controllers en Express
req → request, la solicitud que llega (incluye headers, body, params, etc.).
res → response, lo que Express enviará de vuelta al cliente.
res.status(200).json(persons) → responde con código 200 y el JSON de persons.




*/
