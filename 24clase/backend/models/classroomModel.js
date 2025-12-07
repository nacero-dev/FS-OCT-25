const { v4: uuidv4 } = require('uuid');
const {readCSV, writeCSV} = require('../csv');

const listClassrooms = () => {
    return readCSV('classrooms').map(classroom => ({
        ...classroom,
        students: classroom.students ? classroom.students.split(";") : []
    }));
}

const getClassroom = (id) => {
    const classroom = readCSV("classrooms").find(p => p.id === id)
    classroom.students = classroom.students ? classroom.students.split(";") : [];
    return classroom;
}

const createClassroom = (attrs) => {
    const { name, teacher_id, students } = attrs;
    const classrooms = readCSV("classrooms");
    const newClassroom = {
        id: uuidv4(),
        name,
        teacher_id,
        students: students.join(";")
    };

    classrooms.push(newClassroom);
    writeCSV("classrooms", classrooms);
    newClassroom.students = newClassroom.students ? newClassroom.students.split(";") : [];
    return newClassroom;
}

const updateClassroom = (id, attrs) => {
    const { name, teacher_id, students } = attrs;
    let classrooms = readCSV("classrooms");
    const index = classrooms.findIndex(p => p.id === id);

    classrooms[index] = {
        ...classrooms[index],
        name: name || classrooms[index].name,
        teacher_id: teacher_id || classrooms[index].teacher_id,
        students: students ? students.join(";") : classrooms[index].students
    };

    writeCSV("classrooms", classrooms)
    classrooms[index].students = classrooms[index].students ? classrooms[index].students.split(";") : [];
    return classrooms[index];
}

const deleteClassroom = (id) => {
    let classrooms = readCSV("classrooms");
    const filteredClassrooms = classrooms.filter(p => p.id !== id);
    writeCSV("classrooms", filteredClassrooms); 
}

module.exports = { listClassrooms, getClassroom, createClassroom, updateClassroom, deleteClassroom };

/*
ver personsModel.csv
classroomModel es parecido, con la particularidad de que students se guarda como texto "id1;id2;id3" en el CSV,
pero el modelo lo expone como array ["id1","id2","id3"] al resto de la aplicación.

*/