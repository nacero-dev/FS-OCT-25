/*  "##" 4. Renderización de cada componente (PersonCreate, PersonDetail, PersonList) - PersonList - listar y borrar personas */

import { useState, useEffect } from "react";

const PersonsList = () => {
    const [persons, setPersons] = useState([]); /* useState([]) → persons empieza como un array vacío. Aquí se guardará lo que venga del backend (GET /persons). */
    const [error, setError] = useState(null); /* useState(null) → error empieza como null. Si algo falla al pedir datos, guardarás el error aquí. */

    const handleDelete = (id) => { /* handleDelete recibe un id de persona. */
        fetch(`http://localhost:3000/persons/${id}`, { /* Hace una petición DELETE al backend "Método: DELETE" */
            method: 'DELETE'
        }).then(() => {
            setPersons(persons.filter(person => person.id !== id)); /*persons.filter(...) devuelve un nuevo array sin la persona borrada*/
        });
    };

    useEffect(() => {   /*se ejecuta solo una vez, cuando el componente se monta*/
        fetch('http://localhost:3000/persons') /*Hace fetch a GET /persons*/
            .then(response => response.json()) /*convierte el JSON en objeto JS/array.*/
            .then(data => setPersons(data)) /*guarda la lista en el estado.*/
            .catch(error => {
                console.error('Error fetching persons:', error); /*2. Si hay error en fetch o en .json(), se ejecuta el catch: Se hace console.error(...). Se guarda el error en setError(error).*/
            });
    }, []);

    if (error) {
        return <p>Error fetching persons: {error.message}</p>; /*Si error no es null, cortas la ejecución del componente y renderizas solo este mensaje. Esto evita que el resto del JSX se ejecute.*/
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


2. 
Qué hace error.message
Dentro de tu renderizado, tú haces algo como:
if (error) {
  return <p>Error fetching persons: {error.message}</p>;
}

Aquí:
error es el mismo objeto que guardaste en tu estado con setError(error) dentro del catch.
error.message accede a la propiedad message del objeto error.
Por ejemplo, si el fetch falló, y el navegador lanzó un error TypeError: Failed to fetch,
entonces error.message vale "Failed to fetch".
Tu <p> se vería así:
Error fetching persons: Failed to fetch

*/