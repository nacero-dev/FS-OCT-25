import { useNavigate } from "react-router-dom";
import { useLoaderData } from "react-router-dom";   

const About = () => {
    const navigate = useNavigate();
    const post = useLoaderData();

    return (
        <div>
            <h1> About Page </h1>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <button onClick={() => navigate("/")}>Home</button>
        </div>
    );
};

export default About;

/*

1. "useNavigate"
Opciones para un boton que regresa a otra pagina:

1.1
<button onClick={() => window.history.back()}>Go Back</button>
window.history.back(): sirve para ir a la página anterior del historial del navegador

1.2
<button onClick={() => navigate(-1))}>Go Back</button>
navigate(-1): funciona como un comando para retroceder en la navegación
similar a hacer clic en el botón "Atrás" del navegador o a la función history.back()
El número -1 indica que se debe mover una sola posición hacia atrás en el historial
de la pila de pantallas o páginas visitadas.

1.3
<button onClick={() => navigate("/""))}>Home</button>
navigate("/"): funciona como un comando para redirigir al usuario a la página de inicio de la aplicación web.

2.
const post = useLoaderData();
se utiliza la informacion de la API que se trae desde App.jsx
se ingresa con {post.title} y con {post.body}
y se renderizan en donde va el <h2> y el <p>
tener en cuenta que post viene de const post y se hace accede al objeto por post.title y post.body

*/