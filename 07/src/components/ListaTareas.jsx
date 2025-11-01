import React from "react";
import "./ListaTareas.css";

const ListaTareas = ({ tasks }) => {
  return (
    <div className="lista-tareas">
      <h2 className="lista-tareas__titulo">Lista de Tareas</h2>

      {tasks.length === 0 ? (
        <p className="lista-tareas__mensaje">No hay tareas pendientes 🎉</p>
      ) : (
        <ul className="lista-tareas__lista">
          {tasks.map((task, index) => (
            <li key={index} className="lista-tareas__item">
              {task.nombre} —{" "} 
              {tarea.completada ? "✅ Completada" : "❌ Pendiente"}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListaTareas;


/*

Ej 2-1

Cada tarea del array tareas genera un <li> como este:

"True"
<li key={index}>
  Estudiar React — ✅ Completada
</li>

o

"False"
<li key={index}>
  Hacer la compra — ❌ Pendiente
</li>

*/