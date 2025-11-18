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
}


module.exports = {
    listPersonsController,
    getPersonController,
    createPersonController,
    updatePersonController,
    deletePersonController
};
