//6. 

const { v4: uuidv4 } = require('uuid');
const { readCSV, writeCSV } = require('../csv');

const listClassrooms = () => {
    return readCSV("classrooms").map(classroom => ({ 
        ...classroom,
        students: classroom.students ? classroom.students.split(";") : []
    }));
}

/* 6.
readCSV("classrooms") lee data/classrooms.csv, lo convierte a array de objetos (strings).
Luego mapea cada classroom:
copia todas las propiedades (...classroom)
transforma students de cadena "id1;id2;id3" a array ["id1", "id2", "id3"]
Devuelve al controller un array de objetos ya preparados para la API.

-->controllers
*/


const getClassroom = (id) => {
    const classroom = readCSV("classrooms").find(p => p.id === id);
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

/*

createClassroom
Recibe students como array.
Lo guarda como string: students: students.join(";")
Luego, antes de devolverlo, vuelve a ponerlo como array.

*/



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


/*
updateClassroom
Permite cambiar name, teacher_id, y students.
Si students no viene, mantiene los antiguos.
Siempre guarda en CSV como string, y antes de devolver lo pasa a array.

*/

    writeCSV("classrooms", classrooms);
    classrooms[index].students = classrooms[index].students ? classrooms[index].students.split(";") : [];
    return classrooms[index];
}

const deleteClassroom = (id) => {
    let classrooms = readCSV("classrooms");
    const filtered = classrooms.filter(c => c.id !== id);
    writeCSV("classrooms", filtered);
}

module.exports = { listClassrooms, getClassroom, createClassroom, updateClassroom, deleteClassroom };
