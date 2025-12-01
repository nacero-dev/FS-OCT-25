/* "##" 3. */

const mongoose = require('mongoose');

const classroomSchema = new mongoose.Schema({
    name: { type: String, require: true },
    teacher_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Person', required: true},
    students: [{type: mongoose.Schema.Types.ObjectId, ref: 'Person'}]


});

const Classroom = mongoose.model('Classroom', classroomSchema);
module.exports = Classroom;

/*

Antes:
classroomCSV.js guardaba los students como texto "id1;id2;id3".

const classroomSchema = new mongoose.Schema({
  name: { type: String, require: true },
  teacher_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Person', required: true },
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Person' }]
});

Esto permite relaciones reales (referencias) entre aulas y personas.
Ya no necesitas convertir strings de IDs: MongoDB los relaciona automáticamente mediante sus ObjectId

classroomCSV.js guardaba los students como texto "id1;id2;id3".
Esto permite relaciones reales (referencias) entre aulas y personas.
Ya no necesitas convertir strings de IDs: MongoDB los relaciona automáticamente mediante sus ObjectId.

*/