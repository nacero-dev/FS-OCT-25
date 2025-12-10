import { useState, useEffect } from "react";

const ClassroomsList = () => {
  const [classrooms, setClassrooms] = useState([]);
  const [error, setError] = useState(null);
  const { VITE_API_URL } = import.meta.env;

  const handleDelete = async (id) => {
    if (!confirm("¿Seguro que deseas eliminar esta aula?")) return;

    try {
      const response = await fetch(`${VITE_API_URL}/classrooms/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Error al eliminar el aula");


      setClassrooms((prevClassrooms) =>
        prevClassrooms.filter((classroom) => classroom._id !== id)
      );
    } catch (error) {
      console.error("Error al eliminar el aula:", error);
      alert("No se pudo eliminar el aula");
    }
  };


  useEffect(() => {
    fetch(`${VITE_API_URL}/classrooms`)
      .then((response) => {
        if (!response.ok) throw new Error("Error al obtener las aulas");
        return response.json();
      })
      .then((data) => setClassrooms(data))
      .catch((error) => {
        console.error("Error al obtener las aulas:", error);
        setError(error);
      });
  }, [VITE_API_URL]);



  if (error) return <p>Error al obtener las aulas: {error.message}</p>;

  return (
    <div>
      <h2>Lista de Aulas</h2>
      <a href="/classrooms/create">Crear Aula</a>
      {classrooms.length === 0 ? (
        <p>No se encontraron aulas</p>
      ) : (
        <ul>
          {classrooms.map((classroom) => (
            <li key={classroom._id}>
              {classroom.name} — Profesor:{" "}
              {classroom.teacher_id?.name || classroom.teacher_id}{" "}
              <a href={`/classrooms/${classroom._id}`}>Ver</a>{" "}
              <a href={`/classrooms/create/${classroom._id}`}>Editar</a>{" "}
              <button onClick={() => handleDelete(classroom._id)}>
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ClassroomsList;
