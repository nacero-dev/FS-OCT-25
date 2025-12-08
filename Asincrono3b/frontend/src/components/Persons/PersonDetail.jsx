import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
    

const PersonDetail = () => {
    const { id } = useParams();
    const [person, setPerson] = useState(null);
    const [error, setError] = useState(null);
    const { VITE_API_URL } = import.meta.env;

    // useEffect(() => {
    //     fetch(`${VITE_API_URL}/persons/${id}`)
    //         .then(response => response.json())
    //         .then(data => setPerson(data))
    //         .catch(error => {
    //             console.error('Error al obtener la persona:', error);
    //             setError(error);
    //         });
    // }, [VITE_API_URL, id]);


    useEffect(() => {
    const fetchPerson = async () => {
      try {
        const response = await fetch(`${VITE_API_URL}/persons/${id}`);
        if (!response.ok) throw new Error("Error al obtener la persona");
        const data = await response.json();
        setPerson(data);
      } catch (error) {
        console.error("Error al obtener la persona:", error);
        setError(error);
      }
    };

    fetchPerson();
  }, [VITE_API_URL, id]);


    if (error) {
        return <p>Error al obtener la persona: {error.message}</p>;
    }

    return (
        <div>
            <h2>Detalle de la Persona</h2>
            {!person ? (
                <p>No se encontró la persona</p>
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