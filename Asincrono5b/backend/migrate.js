const {listPersons} = require('./models/personsCSV'); /*listPersons: una función que lee el archivo persons.csv (de tu modelo antiguo del Día 24) y devuelve todos los registros en forma de arreglo de objetos JavaScript.*/
const Person = require('./models/personsModel'); /*el modelo Mongoose (definido en personsModel.js), que representa la colección persons dentro de tu base de datos MongoDB.*/
const mongoose = require('mongoose'); /*la librería que conecta Node.js con MongoDB.*/

/*Vamos a leer datos del CSV y guardarlos en MongoDB usando el modelo Person.*/

const MONGODB_URI= 'mongodb+srv://nicolasacero2023:Odesa1234@cluster0.jecail7.mongodb.net/asincrono4?appName=Cluster0'; //1. aqui se pone la URL del nivel 2 que conecta con MONGODB ATLAS

/* Este es el string de conexión a tu clúster remoto en MongoDB Atlas (el requisito del Nivel 2).*/

mongoose.connect(MONGODB_URI) 


.then(() => console.log('Conectado correctamente a MongoDB Atlas'))
.catch(err => console.error('No se pudo conectar a MongoDB:', err));

/*Aquí Mongoose establece la conexión con tu base de datos.
Si se conecta correctamente, imprime “ Connected to MongoDB”.
Si hay error (por ejemplo, contraseña incorrecta o conexión caída), lo muestra en consola.
Este bloque cumple el Nivel 1 + 2 (instalación de Mongoose y conexión a Atlas).*/


array = listPersons();

/*Llama a la función listPersons() que lee el CSV.
El resultado es algo como esto:
[
  { id: '1', name: 'Ana', surname: 'López', birthdate: '1995-03-14', is_teacher: false },
  { id: '2', name: 'Pedro', surname: 'García', birthdate: '1990-07-01', is_teacher: true },
  ...
]
Así obtenemos todos los datos antiguos desde los archivos CSV.
*/

console.log('Migrando personas desde CSV...');
console.log(array);

/*Solo muestra en consola los datos que va a migrar.
Es una comprobación visual para asegurarte de que los datos del CSV se están leyendo correctamente.*/

// array.forEach(async (personData) => {
//     const person = new Person(personData);
//     await person.save();
//     console.log(`Saved person: ${person.name} ${person.surname}`);
// });

try {
  array.forEach(async (personData) => {
    const person = new Person(personData);
    await person.save();
    console.log(`Saved person: ${person.name} ${person.surname}`);
  });
} catch (error) {
  console.error('Error al migrar personas:', error);
}


/*
Este es el paso de migración real:
array.forEach(...): recorre cada persona del CSV.
new Person(personData): crea un documento Mongoose (instancia del modelo Person) con esos datos.
await person.save(): guarda ese documento dentro de la colección persons de tu base MongoDB.
Luego imprime un mensaje confirmando qué persona se guardó.
En otras palabras:
Cada registro del CSV ahora se convierte en un documento real dentro de MongoDB Atlas.

/*

4.
El proyecto usaba archivos .csv como fuente de datos:
personsCSV.js y classroomCSV.js usaban funciones readCSV y writeCSV para leer y escribir registros.
Cada registro tenía un uuid generado al vuelo.
No había conexión a ninguna base de datos.
Los datos se guardaban físicamente en el disco local.

Se agregó un script de migración, por ejemplo migrate.js, que:

1.Lee los CSV existentes (persons.csv, classroom.csv).
2.Los transforma a objetos JavaScript.
3.Inserta esos objetos en las colecciones MongoDB usando los modelos de Mongoose.

Script de migración

Qué hace:
Importa los datos antiguos de personsCSV.js.
Conecta a MongoDB.
Inserta cada persona en la colección.

5.
personsCSV.js y classroomCSV.js → Aún existen por compatibilidad
Estas mantienen la lógica anterior (lectura desde CSV) y sirven para:
Leer los CSV originales.
Alimentar el script migrate.js.
Pero ya no son el almacenamiento principal, solo una fuente temporal para la migración.

*/