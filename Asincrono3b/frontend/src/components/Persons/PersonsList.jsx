import { useState, useEffect } from "react";

const PersonsList = () => {
  const [persons, setPersons] = useState([]);
  const [error, setError] = useState(null);
  const { VITE_API_URL } = import.meta.env;

  const handleDelete = async (id) => {
    if (!confirm("¿Seguro que deseas eliminar esta persona?")) return;

    try {
      const response = await fetch(`${VITE_API_URL}/persons/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Error al eliminar la persona");

      setPersons((prevPersons) => prevPersons.filter((person) => person._id !== id));
    } catch (error) {
      console.error("Error al eliminar la persona:", error);
      alert("No se pudo eliminar la persona");
    }
  };

  useEffect(() => {
    fetch(`${VITE_API_URL}/persons`)
      .then((response) => response.json())
      .then((data) => setPersons(data))
      .catch((error) => {
        console.error("Error fetching persons:", error);
        setError(error);
      });
  }, [VITE_API_URL]);

  if (error) return <p>Error al obtener las personas: {error.message}</p>;

  return (
    <div>
      <h2>Lista de Personas</h2>
      <a href="/persons/create">Crear Persona</a>
      {persons.length === 0 ? (
        <p>No se encontraron personas</p>
      ) : (
        <ul>
          {persons.map((person) => (
            <li key={person._id}>
              {person.name} {person.surname}{" "}
              <a href={`/persons/${person._id}`}>Ver</a>{" "}
              <a href={`/persons/create/${person._id}`}>Editar</a>{" "}
              <button onClick={() => handleDelete(person._id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PersonsList;