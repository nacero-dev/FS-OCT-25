import { useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const PersonCreate = () => {
    const form = useRef();
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            fetch(`http://localhost:3000/persons/${id}`)
                .then(response => response.json())
                .then(data => {
                    form.current.name.value = data.name;
                    form.current.surname.value = data.surname;
                    form.current.birthdate.value = data.birthdate;
                    form.current.isTeacher.checked = data.isTeacher;
                });
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newPerson = {
            name: form.current.name.value,
            surname: form.current.surname.value,
            birthdate: form.current.birthdate.value,
            isTeacher: form.current.isTeacher.checked
        };

        let url =  id ? `http://localhost:3000/persons/${id}` : 'http://localhost:3000/persons';
        let method =  id ? 'PUT' : 'POST';
        
        fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPerson)
        }).then(() => {
            navigate('/');
        });
    };

    return (
        <div>
            <h2>Create Person</h2>
            <form ref={form} onSubmit={handleSubmit}>
                <input name="name" type="text" placeholder="Name" /><br />
                <input name="surname" type="text" placeholder="Surname" /><br />
                <input name="birthdate" type="date" placeholder="Birthdate" /><br />
                <input name="isTeacher" type="checkbox"/> Is teacher<br />
                <button type="submit">Create</button>
            </form>
        </div>
    );
}

export default PersonCreate;

/*

Qué hace:
Funciona tanto para crear como para editar una persona, dependiendo de si la URL tiene id o no.

👉 Cómo funciona:

Usa useParams() para saber si hay un id:

si no hay id → modo “crear” (POST)

si hay id → modo “editar” (PUT)

Usa useRef() para acceder directamente a los campos del formulario.

Usa useNavigate() para redirigir de vuelta a la página principal (/) tras guardar.

👉 Flujo principal:

a) Si hay id (editar):

Al montar, hace fetch('.../persons/:id') y rellena los campos del formulario con los datos existentes.

b) Al enviar (handleSubmit):

Recolecta todos los valores del formulario.

Decide:

let url = id ? `.../persons/${id}` : '.../persons';
let method = id ? 'PUT' : 'POST';


Envía con fetch(url, { method, headers, body }).

Al finalizar, redirige a la página principal (navigate('/')).

👉 Conclusión:
PersonCreate centraliza la lógica de crear y actualizar usando los endpoints POST /persons y PUT /persons/:id.
*/