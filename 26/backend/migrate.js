const {listPersons} = require('./models/personsCSV');
const Person = require('./models/personsModel');
const mongoose = require('mongoose');

const MONGODB_URI= 'mongodb+srv://nicolasacero2023:Odesa1234@cluster0.jecail7.mongodb.net/dia25?appName=Cluster0'; //aqui se pone la URL del nivel 2

mongoose.connect(MONGODB_URI)

.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB', err));

array = listPersons();

console.log('Migrating persons...');
console.log(array);

array.forEach(async (personData) => {
    const person = new Person(personData);
    await person.save();
    console.log('Saved person: $(person.name) $(person.surname');
});
