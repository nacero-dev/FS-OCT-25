//4. como es /classrooms la peticion entonces llama a router.get('/', listClassroomsController); (sin id) -> 5. controllers

const express = require('express');
const router = express.Router();

const { 
    listClassroomsController,
    getClassroomController,
    createClassroomController,
    updateClassroomController,
    deleteClassroomController
} = require('../controllers/classroomsController');

router.get('/', listClassroomsController);
router.get('/:id', getClassroomController);
router.post('/', createClassroomController);
router.put('/:id', updateClassroomController);
router.delete('/:id', deleteClassroomController);

module.exports = router;
