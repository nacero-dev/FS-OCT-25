const { listClassrooms } = require('./models/classroomCSV');
const Classroom = require('./models/classroomModel');
const mongoose = require('mongoose');

/* Conexión al clúster remoto en MongoDB Atlas */
const MONGODB_URI = 'mongodb+srv://nicolasacero2023:Odesa1234@cluster0.jecail7.mongodb.net/asincrono4?appName=Cluster0'; /*@*/

mongoose.connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

/* Leer los datos del CSV */
const array = listClassrooms();
console.log('Migrating classrooms...');
console.log(array);

/* Guardar en MongoDB Atlas */
array.forEach(async (classroomData) => {
  try {
    const classroom = new Classroom({
      name: classroomData.name,
      teacher_id: classroomData.teacher_id || null,
      students: classroomData.students || [],
    });

    await classroom.save();
    console.log(`Saved classroom: ${classroom.name}`);
  } catch (error) {
    console.error('Error saving classroom:', error.message);
  }
});
