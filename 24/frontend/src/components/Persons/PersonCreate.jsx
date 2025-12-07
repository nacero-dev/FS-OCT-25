/*   "##" 4. Renderización de cada componente (PersonCreate, PersonDetail, PersonList) - PersonCreate-- Crear y editar persona */

import { useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const PersonCreate = () => {
    const form = useRef(); /* form apuntará al elemento <form> del JSX. */
    const navigate = useNavigate(); /* Hook de React Router para redirigir programáticamente a otra ruta */
    const { id } = useParams(); /* Aquí lees :id de la URL., Si vienes de /persons/create → id es undefined → modo crear., Si vienes de /persons/create/:id → id tiene un valor → modo editar.  */

    const { VITE_API_URL } = import.meta.env;

    useEffect(() => {
        if (id) { /* Si hay id:*/
            fetch(`${VITE_API_URL}/persons/${id}`) /* Hace GET /persons/{id}.*/
                .then(response => response.json()) /* Cuando recibe la persona, rellena los campos del formulario:*/
                .then(data => {
                    form.current.name.value = data.name; /* Desde form.current accedes directamente a los inputs */
                    form.current.surname.value = data.surname;
                    form.current.birthdate.value = data.birthdate;
                    form.current.isTeacher.checked = data.isTeacher; /* Si tu backend realmente usa is_teacher en CSV/JSON y no isTeacher, esto no funcionará tal cual.*/
                });
        }
    }, [VITE_API_URL]);

    const handleSubmit = (e) => {
        e.preventDefault(); /* evita que el form haga submit tradicional (recargar página). */

        const newPerson = {
            name: form.current.name.value,
            surname: form.current.surname.value,
            birthdate: form.current.birthdate.value,
            isTeacher: form.current.isTeacher.checked
        };

        let url = id ? `${VITE_API_URL}/persons/${id}` : `${VITE_API_URL}/persons`; /*Decide si hace POST o PUT dependiendo de si hay id:*/
        let method = id ? 'PUT' : 'POST';

        fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json' /* Llama a fetch con: headers: 'Content-Type': 'application/json' para que Express "1" entienda el body como JSON. body: JSON.stringify(newPerson). */
            },
            body: JSON.stringify(newPerson)
        }).then(() => {
            navigate('/'); /* Cuando termina el fetch: navigate('/') → te redirige a la ruta raíz (donde seguramente está PersonsList). */
        });
    };

    /*
    Si id existe:
    url = /persons/:id
    method = 'PUT'
    
    Si no:
    url = /persons
    method = 'POST'
    
    */


    return (
        <div>
            <h2>Crear Persona</h2>
            <form ref={form} onSubmit={handleSubmit}>
                <input name="name" type="text" placeholder="Nombre" /><br />
                <input name="surname" type="text" placeholder="Apellido" /><br />
                <input name="birthdate" type="date" placeholder="Fecha de nacimiento" /><br />
                <input name="isTeacher" type="checkbox" /> Es profesor<br />
                <button type="submit">Crear</button>
            </form>
        </div>
    );
}

export default PersonCreate;

/*

Qué hace:
Funciona tanto para crear como para editar una persona, dependiendo de si la URL tiene id o no.

Cómo funciona:

Usa useParams() para saber si hay un id:

si no hay id → modo “crear” (POST)

si hay id → modo “editar” (PUT)

Usa useRef() para acceder directamente a los campos del formulario.

Usa useNavigate() para redirigir de vuelta a la página principal (/) tras guardar.

Flujo principal:

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

"1" 
1.1 ¿Qué es Express?
Express.js es un framework (una librería avanzada) para Node.js que te permite crear un servidor web en JavaScript de forma sencilla.
Es el “cerebro” que se encarga de escuchar las peticiones HTTP (GET, POST, PUT, DELETE) que llegan desde el navegador o desde tu frontend React, procesarlas y responder con datos (normalmente JSON).

En tu caso, Express está en la carpeta backend/
y actúa como la API REST que React consulta.
Cuando tu frontend hace esto:
fetch('http://localhost:3000/persons')
esa URL (localhost:3000/persons) no apunta al frontend,
sino al servidor Express que está corriendo en el puerto 3000.

1.2 ¿Dónde está exactamente Express en tu proyecto?

Express no es un archivo concreto; es una librería de Node.js que tú importas y usas en tu código dentro de la carpeta backend/.
En otras palabras:

Express vive en tu carpeta backend/node_modules/express/ (una vez instalado con npm install express).
Pero lo usas tú en tu propio código, normalmente en el archivo principal del servidor:
backend/index.js




*/