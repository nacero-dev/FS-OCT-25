/*   "##" 4. Renderización de cada componente (PersonCreate, PersonDetail, PersonList) - PersonDetail - listar y borrar personas PersonDetail*/
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
    

const PersonDetail = () => {
    const { id } = useParams(); /*1*/
    const [person, setPerson] = useState(null);
    const [error, setError] = useState(null);

    const { VITE_API_URL } = import.meta.env;

    useEffect(() => {
        fetch(`${VITE_API_URL}/persons/${id}`)
            .then(response => response.json())
            .then(data => setPerson(data))
            .catch(error => {
                console.error('Error al obtener la persona:', error);
                setError(error);
            });
    }, [VITE_API_URL, id]);

    if (error) {
        return <p>Error al obtener la persona:  {error.message}</p>;
    }

    return (
        <div>
            <h2>Detalle de Persona</h2>
            {!person ? (
                <p>No se encontró la persona.</p>
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

/*PersonDetail.jsx

Qué hace:
Muestra la información detallada de una persona individual (nombre, apellidos y fecha de nacimiento).

Cómo funciona:

Usa useParams() (de React Router) para leer el parámetro :id de la URL.
Ejemplo: /persons/5a12b... → id = "5a12b...".

1.useParams:
hook de React Router.
Sirve para leer los valores de los parámetros dinámicos que vienen en la URL.
Traducción práctica:
cuando una ruta en tu aplicación tiene algo como /persons/:id,
el :id es una variable dentro de la URL, y useParams() te deja leer su valor.
Ejemplo
<Route path="/persons/:id" element={<PersonDetail />} />
Si visitas /persons/123,
el parámetro dinámico :id vale "123".
Si visitas /persons/abc,
el parámetro dinámico :id vale "abc".
person empieza como null (no tienes datos todavía).
error para guardar problemas de fetch.

Al montar el componente (useEffect), hace:

fetch(`http://localhost:3000/persons/${id}`)


para obtener los datos desde el backend.

Si los recibe correctamente, los guarda con setPerson(data).

Si hay error, lo captura con setError.

Renderiza:

Si no hay datos → “No person found.”

Si existen → nombre + apellido + fecha.

Conclusión:
PersonDetail se conecta al endpoint GET /persons/:id para mostrar una sola persona.*/