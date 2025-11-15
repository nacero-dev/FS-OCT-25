import { useLoaderData } from "react-router-dom";

export default function Post() {
  const post = useLoaderData();

  return (
    <article>
      <h2>{post.title}</h2>   
      <p>{post.body}</p>
    </article>
  );
}

/* post.title y post.body vienen directamente de la API jsonplaceholder.typicode.com */

// Loader: obtiene datos de la API
export async function postLoader({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );

  if (!res.ok) {
    // Si hay error en la respuesta, se lanza excepción
    throw new Response("No se pudo cargar el post", { status: res.status });
  }

  return res.json();

}


/*

¿Por qué usar un loader en vez de hacer fetch() directamente 
dentro del componente?

1. Problema cuando haces fetch() dentro del componente
Sirve para acceder a los datos que ha cargado el loader asociado a esa ruta.
Es decir: el loader "postLoader" hace la petición fetch, y el resultado llega al componente vía useLoaderData().


Problemas que hace fetch normal y como los arregla loader:

(1) La vista se renderiza antes de tener datos

El componente aparece → luego hace fetch → luego vuelve a renderizar.
Resultado: parpadeos, estados intermedios, undefined, loaders extra, etc.

(2) Si la petición falla, se tiene que manejar manualmente el error

useState para error, condicionales, ifs, try/catch…

Acabas metiendo lógica de red dentro de tu componente, que debería estar más limpio.

(3) Si se navega entre rutas, los “saltos” y re-renderizados son molestos

Ejemplo:

Si se está en /post/1

Y se quiere ir a /post/2

El componente se vuelve a montar pero primero está vacío

Luego aparece el contenido

Se ve "feo" y no fluido.

(4) No puedes hacer streaming, loaders paralelos ni pre-carga de rutas

React Router v7 sí puede.

2. ¿Qué resuelve el loader?

El loader trae el concepto de “ruta = datos listos antes de renderizar”.

Punto clave:

El componente NO se muestra hasta que los datos estén listos

La arquitectura queda así:
URL → loader → datos cargados → componente renderizado

En lugar de:
URL → componente vacío → fetch → espera → re-render → datos

Beneficios del loader
1. Renderizado sin parpadeos

Tu componente no aparece "vacío".

El usuario ve directamente:

✔️ El post
✔️ O la página de error
✔️ O un loader global (opcional), pero no un componente vacío.

2. Separación total entre lógica de datos y lógica de UI
Con loader:

El loader hace:

fetch

validación

manejo de errores

Tu componente solo muestra datos

Ejemplo:

export function Post() {
  const post = useLoaderData();
  return <h1>{post.title}</h1>;
}


Mejora la  limpio.

4. Sin necesidad de useEffect + useState
La típica combinación:

useState()
useEffect()
fetch()
setState()
return (...)

Queda reemplazada por:
const data = useLoaderData();


visto de otro modo

Componente Post
Post es el componente que se renderiza cuando la ruta /post/:id coincide.

Dentro, Llamas a useLoaderData():
-React Router ejecuta primero el loader definido para esa ruta.
-Lo que devuelva el loader (en este caso, un objeto post) se “inyecta” 
en el componente y se obtiene con useLoaderData().
-const post = useLoaderData();
Aquí post será algo como:

{
  userId: 1,
  id: 1,
  title: "titulo del post",
  body: "contenido del post..."
}

Luego simplemente lo pintas:
<h2>{post.title}</h2> → título del post.
<p>{post.body}</p> → contenido del post.


Esta función es el loader que se asocia a la ruta router.jsx.
-export async function postLoader({ params }) { ... }
 -El router llama a esta función antes de renderizar el componente Post.
 -Recibe un objeto con información de la ruta. De ahí sacamos params.
 -params contiene los parámetros dinámicos de la URL: para /post/5 → { id: "5" }.

const res = await fetch(...);
  Hace una petición HTTP a jsonplaceholder usando el id de la ruta:
  `https://jsonplaceholder.typicode.com/posts/${params.id}`

Si entras a /post/1 → hace fetch a /posts/1.

if (!res.ok) { ... }
  res.ok es false si el servidor responde con código 4xx o 5xx (404, 500, etc.).
 Si algo va mal (ID no existe, error de servidor, etc.), se lanza un error:
 throw new Response("No se pudo cargar el post", { status: res.status });
 throw hace que React Router considere que el loader ha fallado.

 Como en tu router has definido un errorElement para esta ruta, React Router
 renderizará ese componente (ErrorPage) en vez de Post.

 return res.json();
 Si todo va bien, se transforma la respuesta a JSON y se devuelve.
 Ese valor devuelto es el que llegará a useLoaderData() dentro del componente Post.


En resumen:

postLoader:

lee params.id,
hace fetch del post,
si hay error → lanza un Response (que terminará en ErrorPage),
si todo ok → devuelve los datos del post para que Post los use.

Nota importante:

se hacen dos export defaults
export default function Post()
export async function postLoader({ params }) {

dado a esto se hace import Post, { postLoader } from "./componentes/post"; en router.jsx

1. Hay dos tipos de imports en JavaScript (ESM)

A) Imports por defecto (default imports)

Se usan cuando el archivo exporta una sola cosa como "default".

Ejemplo:

Archivo Post.jsx
export default function Post() {
  return <h1>Post</h1>;
}


Entonces se importa así:

import Post from "./componentes/post";


✔️ El nombre Post lo eliges tú.
✔️ Puede tener cualquier nombre.

B) Imports con nombre (named imports)

Se usan cuando el archivo exporta cosas no-default, o sea, exportaciones con nombre.

Ejemplo:

Archivo error-page.jsx
export function ErrorPage() { ... }


Entonces se importa así:

import { ErrorPage } from "./componentes/error-page";


¿Dónde importas realmente tu componente Post?

Aquí:

import Post, { postLoader } from "./componentes/post";


Esto significa:

Post → importación por defecto
{ postLoader } → importación con nombre
porque en tu archivo tienes:

porque en tu archivo tienes:
export default function Post() {}
export async function postLoader() {}

*/