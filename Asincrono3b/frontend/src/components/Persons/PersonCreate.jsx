import { useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const PersonCreate = () => {
    const form = useRef();
    const navigate = useNavigate();
    const { id } = useParams();
    const { VITE_API_URL } = import.meta.env;

    useEffect(() => {
        if (id) {
            fetch(`${VITE_API_URL}/persons/${id}`)
                .then(response => response.json())
                .then(data => {
                    form.current.name.value = data.name;
                    form.current.surname.value = data.surname;
                    form.current.birthdate.value = data.birthdate;
                    form.current.isTeacher.checked = data.isTeacher;
                });
        }
    }, [VITE_API_URL, id]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newPerson = {
            name: form.current.name.value,
            surname: form.current.surname.value,
            birthdate: form.current.birthdate.value,
            is_Teacher: form.current.isTeacher.checked
        };

        let url = id
            ? `${VITE_API_URL}/persons/${id}`
            : `${VITE_API_URL}/persons`;
        let method = id ? 'PUT' : 'POST';

        
        fetch(url, {
            method: method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newPerson)
        })
            .then(() => {
                navigate('/');
            })
            .catch(error => {
                console.error('Error al guardar la persona:', error);
                alert('No se pudo guardar la persona');
            });



    };

    return (
        <div>
            <h2>Crear Persona</h2>
            <form ref={form} onSubmit={handleSubmit}>
                <input name="name" type="text" placeholder="Name" /><br />
                <input name="surname" type="text" placeholder="Surname" /><br />
                <input name="birthdate" type="date" placeholder="Birthdate" /><br />
                <input name="isTeacher" type="checkbox" /> Es Profesor<br />
                <button type="submit">Crear</button>
            </form>
        </div>
    );
}

export default PersonCreate;