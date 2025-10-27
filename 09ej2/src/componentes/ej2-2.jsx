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