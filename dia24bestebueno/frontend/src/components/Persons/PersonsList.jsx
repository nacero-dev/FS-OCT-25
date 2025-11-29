import { useState, useEffect } from "react";

const PersonsList = () => {
    const [persons, setPersons] = useState([]);
    const [error, setError] = useState(null);

    const handleDelete = (id) => {
        fetch(`http://localhost:3000/persons/${id}`, {
            method: 'DELETE'
        }).then(() => {
            setPersons(persons.filter(person => person.id !== id));
        });
    };

    useEffect(() => {
        fetch('http://localhost:3000/persons')
            .then(response => response.json())
            .then(data => setPersons(data))
            .catch(error => {
                console.error('Error fetching persons:', error);
                setError(error);
            });
    }, []);

    if (error) {
        return <p>Error fetching persons: {error.message}</p>;
    }

    return (
        <div>
            <h2>Persons List</h2>
            <a href="/persons/create">Create Person</a>
            {persons.length === 0 ? (
                <p>No persons found.</p>
            ) : (
                <ul>
                    {persons.map(person => (
                        <li key={person.id}>
                            {person.name} {person.surname}
                            <a href={`/persons/${person.id}`}> View</a>
                            <a href={`/persons/create/${person.id}`}> Edit</a>
                            <button onClick={() => handleDelete(person.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default PersonsList;

/*
1️⃣ PersonsList.jsx

👉 Qué hace:
Es la “pantalla principal” que lista todas las personas.
Muestra cada registro con opciones de ver, editar y eliminar.

👉 Cómo funciona:

Al montar el componente (useEffect), ejecuta:

fetch('http://localhost:3000/persons')


para obtener los datos desde el backend.

Guarda los datos en el estado con setPersons(data).

Si ocurre un error, lo guarda en setError y lo muestra en pantalla.

Renderiza una lista <ul> con cada persona:

“View” → enlace a /persons/:id

“Edit” → enlace a /persons/create/:id

“Delete” → botón que llama a handleDelete(id).

👉 Eliminar persona (handleDelete):

Envía un fetch con método DELETE a /persons/:id.

Cuando termina, actualiza el estado local filtrando al eliminado:

setPersons(persons.filter(p => p.id !== id))


👉 Conclusión:
PersonsList representa la vista general, conectada directamente con GET y DELETE del backend.
*/