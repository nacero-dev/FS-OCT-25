/*
Usa uuidv4() para generar id.
Usa las funciones genéricas de CSV.
*/

const { v4: uuidv4 } = require('uuid');
const { readCSV, writeCSV } = require('../csv');


/* listPersons Devuelve todo el CSV como array de objetos.*/
const listPersons = () => readCSV("persons");

/* getPerson Vuelve a leer el CSV y busca por id.*/
const getPerson = (id) => readCSV("persons").find(p => p.id === id);

/*
createPerson
Lee todo,
crea un objeto nuevo con id,
lo inserta,
reescribe el CSV completo,
devuelve la persona creada.
*/

const createPerson = (attrs) => {
    const persons = readCSV("persons");
    const newPerson = {
        id: uuidv4(),
        ...attrs
    };
    persons.push(newPerson);
    writeCSV("persons", persons);
    return newPerson;
}


/*

updatePerson
Localiza la persona,
mezcla los datos nuevos sobre los antiguos,
guarda,
devuelve el resultado.

*/

const updatePerson = (id, attrs) => {
    let persons = readCSV("persons");
    const index = persons.findIndex(p => p.id === id);

    persons[index] = {
        ...persons[index],
        ...attrs /*1E Abajo*/
    };

    writeCSV("persons", persons);
    return persons[index];
}

/*

Localiza la persona,
mezcla los datos nuevos sobre los antiguos,
guarda,
devuelve el resultado.

*/




const deletePerson = (id) => {
    let persons = readCSV("persons");
    const filtered = persons.filter(p => p.id !== id);
    writeCSV("persons", filtered);
}

module.exports = { listPersons, getPerson, createPerson, updatePerson, deletePerson };

/*
Filtra todas menos la que tiene ese id,
guarda.
*/


/*
1E
QUE ES ...persons, ...attrs?

El código:

persons[index] = {
    ...persons[index],
    ...attrs
};

Este código hace una actualización “mezclando objetos”.

Vamos a explicarlo paso a paso.

¿Qué es findIndex?

Antes de esa línea, tienes:

const index = persons.findIndex(p => p.id === id);


Aquí:

.findIndex() busca el índice numérico del elemento cuyo id coincide.

Si lo encuentra, devuelve un número: 0, 1, 2, etc.

Si no lo encuentra, devuelve -1.

Ejemplo:

persons = [
  { id: "1", name: "Ana" },
  { id: "2", name: "Luis" }
]

findIndex(p => p.id === "2") → devuelve 1

Ahora sí, el código importante
persons[index] = {
    ...persons[index],
    ...attrs
};

Esto significa:
✔ 1. Toma el objeto original

persons[index]

Ejemplo:

{ id: "2", name: "Luis", surname: "Pérez" }

✔ 2. Lo expande en un objeto nuevo

...persons[index]

Esto copia sus propiedades:

{
  id: "2",
  name: "Luis",
  surname: "Perez"
}

✔ 3. Luego copia las propiedades nuevas que vienen en attrs

...attrs

Ejemplo:

attrs = { name: "Luis Miguel" }

✔ 4. Y las combina PRIORITIZANDO attrs
{
  id: "2",
  name: "Luis Miguel",  // ← sobrescribe
  surname: "Perez"
}

¿Qué hace exactamente el operador spread (...obj)?
TOMA TODAS LAS PROPIEDADES DEL OBJETO

Y las copia a un nuevo objeto.

Ejemplo:

const persona = { name: "Ana", age: 20 };

const copia = { ...persona };


copia:

{name: "Ana", age: 20}

5. ¿Por qué se usa ... dos veces?

Porque estás:

✔ Copiando el objeto existente

...persons[index]

✔ Sobrescribiendo campos con los nuevos valores

...attrs

Esto evita borrar propiedades y solo actualiza las necesarias.

6. Ejemplo REAL de tu proyecto

Antes:

persons[index] = {
    id: "10",
    name: "Pedro",
    surname: "Gomez",
    birthdate: "1990-10-10"
}


El cliente manda:

{
  "surname": "Garcia"
}


Entonces:

valores anteriores:
...persons[index]

valores nuevos:
...attrs


Resultado final:

{
  id: "10",
  name: "Pedro",
  surname: "Garcia",     // ← actualizado
  birthdate: "1990-10-10"
}

Conclusión final
✔ findIndex() encuentra dónde está el objeto a modificar
✔ persons[index] = {...} reemplaza el objeto completo
✔ ...persons[index] copia lo antiguo
✔ ...attrs actualiza solo los campos enviados
✔ Esto es el patrón estándar para updates en APIs REST

*/