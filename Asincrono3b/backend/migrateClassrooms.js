const { listClassrooms } = require('./models/classroomCSV');
const Classroom = require('./models/classroomModel');
const mongoose = require('mongoose');

/* Conexión al clúster remoto en MongoDB Atlas */
const MONGODB_URI = 'mongodb+srv://nicolasacero2023:Odesa1234@cluster0.jecail7.mongodb.net/asincrono4?appName=Cluster0';

mongoose.connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

array = listClassrooms();

console.log('Migrando aulas desde CSV...');
console.log(array);

try {
  array.forEach(async (classroomData) => {
    const classroom = new Classroom(classroomData);
    await classroom.save();
    console.log(`Saved classroom: ${classroom.name}`);
  });
} catch (error) {
  console.error('Error al migrar aulas:', error);
}
