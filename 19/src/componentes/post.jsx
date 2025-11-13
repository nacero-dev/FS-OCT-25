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

// Loader: obtiene datos de la API
export async function postLoader({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );

  if (!res.ok) {
    // Si hay error en la respuesta, lanzamos excepción
    throw new Response("No se pudo cargar el post", { status: res.status });
  }

  return res.json();
}

/*
¿Por qué usar un loader en vez de hacer fetch() directamente dentro del componente?

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



*/