/* Controlador para la colección de personas (Persons) usando Mongoose y MongoDB Atlas */

const Person = require('../models/personsModel');

/* Listar todas las personas */
const listPersonsController = async (req, res) => {
  try {
    const persons = await Person.find();
    res.status(200).json(persons);
  } catch (error) {
    console.error('Error al obtener las personas:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

/* Obtener una persona por su ID */
const getPersonController = async (req, res) => {
  try {
    const person = await Person.findById(req.params.id);
    if (!person) {
      return res.status(404).json({ error: 'Persona no encontrada' });
    }
    res.status(200).json(person);
  } catch (error) {
    console.error('Error al obtener la persona:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

/* Crear una nueva persona */
const createPersonController = async (req, res) => {
  try {
    const { name, surname, is_teacher, birthdate } = req.body;

    if (!name || !surname || !birthdate) {
      return res.status(400).json({
        error: 'Los campos nombre, apellido y fecha de nacimiento son obligatorios',
      });
    }

    const newPerson = await Person.create({
      name,
      surname,
      is_teacher: is_teacher || false,
      birthdate,
    });

    res.status(201).json(newPerson);
  } catch (error) {
    console.error('Error al crear la persona:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

/* Actualizar una persona */
const updatePersonController = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedPerson = await Person.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatedPerson) {
      return res.status(404).json({ error: 'Persona no encontrada' });
    }

    res.status(200).json(updatedPerson);
  } catch (error) {
    console.error('Error al actualizar la persona:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

/* Eliminar una persona */
const deletePersonController = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPerson = await Person.findByIdAndDelete(id);

    if (!deletedPerson) {
      return res.status(404).json({ error: 'Persona no encontrada' });
    }

    res.status(200).json({ mensaje: 'Persona eliminada correctamente' });
  } catch (error) {
    console.error('Error al eliminar la persona:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

module.exports = {
  listPersonsController,
  getPersonController,
  createPersonController,
  updatePersonController,
  deletePersonController,
};
