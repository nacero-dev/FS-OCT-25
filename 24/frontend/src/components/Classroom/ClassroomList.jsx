import { useState, useEffect } from "react";

const ClassroomsList = () => {
  const [classrooms, setClassrooms] = useState([]);
  const [error, setError] = useState(null);
  const { VITE_API_URL } = import.meta.env;

  const handleDelete = (id) => {
    fetch(`${VITE_API_URL}/classrooms/${id}`, {
      method: "DELETE",
    }).then(() => {
      setClassrooms(classrooms.filter((classroom) => classroom.id !== id));
    });
  };

  useEffect(() => {
    fetch(`${VITE_API_URL}/classrooms`)
      .then((response) => response.json())
      .then((data) => setClassrooms(data))
      .catch((error) => {
        console.error("Error al obtener las aulas:", error);
        setError(error);
      });
  }, [VITE_API_URL]);

  if (error) {
    return <p>Error al obtener las aulas: {error.message}</p>;
  }

  return (
    <div>
      <h2>Lista de Aulas</h2>
      <a href="/classrooms/create">Crear Aula</a>
      {classrooms.length === 0 ? (
        <p>No se encontraron aulas.</p>
      ) : (
        <ul>
          {classrooms.map((classroom) => (
            <li key={classroom.id}>
              {classroom.name} — ID del Profesor: {classroom.teacher_id}
              <a href={`/classrooms/${classroom.id}`}> Ver</a>
              <a href={`/classrooms/create/${classroom.id}`}> Editar</a>
              <button onClick={() => handleDelete(classroom.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ClassroomsList;
