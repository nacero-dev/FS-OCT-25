import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ClassroomDetail = () => {
  const { id } = useParams();
  const [classroom, setClassroom] = useState(null);
  const [error, setError] = useState(null);
  const { VITE_API_URL } = import.meta.env;

  useEffect(() => {
    fetch(`${VITE_API_URL}/classrooms/${id}`)
      .then((response) => response.json())
      .then((data) => setClassroom(data))
      .catch((error) => {
        console.error("Error al obtener el aula:", error);
        setError(error);
      });
  }, [VITE_API_URL, id]);

  if (error) {
    return <p>Error al obtener el aula: {error.message}</p>;
  }

  return (
    <div>
      <h2>Detalle del Aula</h2>
      {!classroom ? (
        <p>No se encontró el aula</p>
      ) : (
        <ul>
          <li>
            <strong>Nombre:</strong> {classroom.name}
          </li>
          <li>
            <strong>ID del Profesor:</strong> {classroom.teacher_id}
          </li>
          <li>
            <strong>Estudiantes:</strong>{" "}
            {classroom.students && classroom.students.length > 0
              ? classroom.students.join(", ")
              : "Sin estudiantes"}
          </li>
        </ul>
      )}
    </div>
  );
};

export default ClassroomDetail;
