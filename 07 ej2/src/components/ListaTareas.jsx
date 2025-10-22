import React from "react";
import "./ListaTareas.css";

const ListaTareas = ({ tareas }) => {
  return (
    <div className="lista-tareas">
      <h2 className="lista-tareas__titulo">Lista de Tareas</h2>

      {tareas.length === 0 ? (
        <p className="lista-tareas__mensaje">No hay tareas pendientes 🎉</p>
      ) : (
        <ul className="lista-tareas__lista">
          {tareas.map((tarea, index) => (
            <li key={index} className="lista-tareas__item">
              {tarea.nombre} —{" "}
              {tarea.completada ? "✅ Completada" : "❌ Pendiente"}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListaTareas;
