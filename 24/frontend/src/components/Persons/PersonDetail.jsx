import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
    

const PersonDetail = () => {
    const { id } = useParams();
    const [person, setPerson] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/persons/${id}`)
            .then(response => response.json())
            .then(data => setPerson(data))
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
            <h2>Person Detail</h2>
            {!person ? (
                <p>No person found.</p>
            ) : (
                <ul>
                    <li>
                        {person.name} {person.surname} - {person.birthdate}
                    </li>
                </ul>
            )}
        </div>
    );
};

export default PersonDetail;

/*2️⃣ PersonDetail.jsx

👉 Qué hace:
Muestra la información detallada de una persona individual (nombre, apellidos y fecha de nacimiento).

👉 Cómo funciona:

Usa useParams() (de React Router) para leer el parámetro :id de la URL.
Ejemplo: /persons/5a12b... → id = "5a12b...".

Al montar el componente (useEffect), hace:

fetch(`http://localhost:3000/persons/${id}`)


para obtener los datos desde el backend.

Si los recibe correctamente, los guarda con setPerson(data).

Si hay error, lo captura con setError.

Renderiza:

Si no hay datos → “No person found.”

Si existen → nombre + apellido + fecha.

👉 Conclusión:
PersonDetail se conecta al endpoint GET /persons/:id para mostrar una sola persona.*/