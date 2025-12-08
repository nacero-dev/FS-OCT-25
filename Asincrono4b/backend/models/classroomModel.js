const mongoose = require('mongoose');

const classroomSchema = new mongoose.Schema({
  name: { type: String, required: true },
  teacher_id: { type: String, required: true }, 
  students: [{ type: String }],                 
});

const Classroom = mongoose.model('Classroom', classroomSchema);
module.exports = Classroom;
