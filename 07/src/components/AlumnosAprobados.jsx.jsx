import React from "react";
import "./AlumnosAprobados.css";

const AlumnosAprobados = ({ grades }) => {
  const aprobados = grades.filter((grade) => grade.nota >= 5);

  return (
    <div className="alumnos-aprobados">
      <h2 className="alumnos-aprobados__titulo">Alumnos Aprobados</h2>

      <ul className="alumnos-aprobados__lista">
        {aprobados.map((grade) => (
          <li key={grade.id} className="alumnos-aprobados__item">
            {grade.nombre} — Nota: {grade.nota}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlumnosAprobados;