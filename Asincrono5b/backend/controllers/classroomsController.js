/* Controlador para la colección de aulas (Classrooms) usando Mongoose y MongoDB Atlas */

const Classroom = require('../models/classroomModel');

/* Listar todas las aulas */
const listClassroomsController = async (req, res) => {
  try {
    const classrooms = await Classroom.find().populate('teacher_id').populate('students');
    res.status(200).json(classrooms);
  } catch (error) {
    console.error('Error al obtener las aulas:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

/* Obtener un aula por su ID */
const getClassroomController = async (req, res) => {
  try {
    const classroom = await Classroom.findById(req.params.id)
      .populate('teacher_id')
      .populate('students');

    if (!classroom) {
      return res.status(404).json({ error: 'Aula no encontrada' });
    }

    res.status(200).json(classroom);
  } catch (error) {
    console.error('Error al obtener el aula:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

/* Crear una nueva aula */
const createClassroomController = async (req, res) => {
  try {
    const { name, teacher_id, students } = req.body;

    if (!name || !teacher_id) {
      return res
        .status(400)
        .json({ error: 'Los campos nombre y ID del profesor son obligatorios' });
    }

    const newClassroom = await Classroom.create({
      name,
      teacher_id,
      students: students || [],
    });

    res.status(201).json(newClassroom);
  } catch (error) {
    console.error('Error al crear el aula:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

/* Actualizar un aula */
const updateClassroomController = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedClassroom = await Classroom.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatedClassroom) {
      return res.status(404).json({ error: 'Aula no encontrada' });
    }

    res.status(200).json(updatedClassroom);
  } catch (error) {
    console.error('Error al actualizar el aula:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

/* Eliminar un aula */
const deleteClassroomController = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedClassroom = await Classroom.findByIdAndDelete(id);

    if (!deletedClassroom) {
      return res.status(404).json({ error: 'Aula no encontrada' });
    }

    res.status(200).json({ mensaje: 'Aula eliminada correctamente' });
  } catch (error) {
    console.error('Error al eliminar el aula:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

module.exports = {
  listClassroomsController,
  getClassroomController,
  createClassroomController,
  updateClassroomController,
  deleteClassroomController,
};
