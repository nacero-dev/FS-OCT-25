
let hogwarts = [ 

{ nombre: 'Harry' , apellido : 'Potter' , casa : 'Griffindor'}, 
{ nombre: 'Ron'   , apellido : 'Weasly' , casa : 'Griffindor'},
{ nombre: 'Draco' , apellido : 'Malfoy' , casa : 'Slytherin' }

];


let griffindor= hogwarts.filter( alumno => alumno.casa === 'Griffindor' );

console.log(griffindor);