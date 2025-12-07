const { v4: uuidv4 } = require('uuid'); /*genera ids unicos*/
const {readCSV, writeCSV} = require('../csv');

/*
readCSV('persons') → abre el archivo data/persons.csv y devuelve un array de objetos.
writeCSV('persons', data) → sobrescribe el CSV con los datos actualizados.
*/

const listPersons = () => {
    return readCSV('persons');
}

const getPerson = (id) => {
    return readCSV("persons").find(p => p.id === id);
}

const createPerson = (attrs) => {
    const { name, surname, is_teacher, birthdate } = attrs;
    const persons = readCSV("persons");
    const newPerson = {
        id: uuidv4(),
        name,
        surname,
        is_teacher: is_teacher || 'false',
        birthdate
    };

    persons.push(newPerson);
    writeCSV("persons", persons);
    return newPerson;
}

const updatePerson = (id, attrs) => {
    const { name, surname, is_teacher, birthdate } = attrs;
    let persons = readCSV("persons");
    const index = persons.findIndex(p => p.id === id);

    persons[index] = {
        ...persons[index],
        name: name || persons[index].name,
        surname: surname || persons[index].surname,
        is_teacher: is_teacher !== undefined ? is_teacher : persons[index].is_teacher,
        birthdate: birthdate || persons[index].birthdate
    };

    writeCSV("persons", persons)
    return persons[index];
}

const deletePerson = (id) => {
    let persons = readCSV("persons");
    const filteredPersons = persons.filter(p => p.id !== id);
    writeCSV("persons", filteredPersons); 
}

module.exports = { listPersons, getPerson, createPerson, updatePerson, deletePerson };


/*

@esto es express?

Lógica de negocio + acceso a datos (CSV)
Aquí está la lógica de CRUD sobre los CSV, usando uuid para generar IDs.

Todos usan readCSV y writeCSV de csv.js:

-listPersons → readCSV("persons")

-getPerson(id) → readCSV("persons").find(p => p.id === id)

-createPerson(attrs):
 -lee todo
 -crea objeto con id: uuidv4(), ...attrs
 -hace push
 -reescribe el CSV

-updatePerson(id, attrs):
 -findIndex
 -mezcla datos antiguos y nuevos con el operador spread:
  persons[index] = { ...persons[index], ...attrs }

-deletePerson(id):
 -filtra la lista excluyendo ese id y la reescribe.

classroomModel es parecido, con la particularidad de que students se guarda como texto "id1;id2;id3" en el CSV
pero el modelo lo expone como array ["id1","id2","id3"] al resto de la aplicación.

Los modelos (models/personsModel.js) son la capa que se comunica con tus datos.
En vez de usar una base de datos real, tú usas archivos .csv.
readCSV('persons') → abre el archivo data/persons.csv y devuelve un array de objetos.
writeCSV('persons', data) → sobrescribe el CSV con los datos actualizados.

*/