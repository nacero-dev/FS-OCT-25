import React from "react";
import "./ej2-2.css";

function Tarea({ texto, completada }) {
  return (
    <p className={`tarea ${completada ? "tareacompletada" : "tarea"}`}>
      {texto}
    </p>
  );
}

export default Tarea;

/* 

La razón por la que aparece ${} es porque estás usando template literals (plantillas de texto)
de JavaScript para combinar texto + valores dinámicos dentro de una misma cadena.

1. La comilla invertida
En vez de usar comillas normales " " o ' ', se usan backticks (comillas invertidas):
`texto aquí`
Los backticks permiten insertar valores dinámicos dentro del texto.

2. La sintaxis ${ ... }
Sirve para inyectar valores de JavaScript dentro del texto.
Ejemplo simple:
`Hola ${nombre}`

className={`tarea ${completada ? "tareacompletada" : "tarea"}`}
Se está construyendo un string (un texto) que será el valor final de className.
React necesita una clase CSS final. La clase depende de si la tarea está completada o no.
Dado a que con tarea completada tachara el texto y con tarea lo mantendrá normal

*/