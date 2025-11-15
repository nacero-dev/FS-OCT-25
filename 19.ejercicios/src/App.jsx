import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Error from './components/Error.jsx'
import Layout from './components/Layout.jsx'
import User from './components/User.jsx'
import Post from './components/Post.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = false; /*en false mostrará "Please log in to access this page", en true mostrará el contenido del about por medio de children */
  if (!isAuthenticated) {
    return <h2>Please log in to access this page</h2>;
  }
  return children;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },

      {
        path: "/about/:id?",
        element: <ProtectedRoute><About /></ProtectedRoute>,
        loader: async ({ params }) => {
          return fetch(`https://jsonplaceholder.typicode.com/posts/${params.id || 1}`)
            .then(res => res.json())
        },
        errorElement: <Error /> /*se trae de componente Error.jsx */
      },

      {
        path: "/user/:id?",
        element: <User />
      },

      {
        path: "/post/:id?",
        element: <Post />,
        loader: async ({ params }) => {
          const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id || 1}`);

          if (!res.ok) {
            throw new Error("Post failed to load");
          }

          return res.json();
        },
        errorElement: <Error /> /*comparacion de manejo de errores entre .then y throw new error (en $$$$ abajo) */
      }

    ]
  }
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

/* <RouterProvider router={router} />  ejecuta todo el fragmento del router "const router = createBrowserRouter([" */

export default App




/*si path se deja asi: path: "/about/:id",
entonces se necesitara siempre especificar la parte de /:id, con algun valor en la ruta para que redireccione
en cambio si se pone path: /:id? entonces dependerá de si se tiene o no algun valor para redireccionar (se vuelve optativo)

loader y params
¿Qué es un loader?
loader es una función especial que se ejecuta:
antes de que el componente se renderice
en el servidor o en el cliente
y sirve para cargar datos (fetch, params, validaciones, etc.)
Loader = función que prepara datos para una ruta.
Esto se usa en las paginas de About con useLoaderData(); ver en About como se usa

Ejemplo sencillo: 

{
  path: "/about/:id",
  element: <About />, <= aqui se trae el componente
  loader: ({params}) => {
   console.log(params)
    return null
  }
}


¿Qué es params?
params es un objeto que contiene los parámetros dinámicos de la URL.
Si tu ruta es:
path: "/about/:id?"
y el usuario entra a:
/about/45

Entonces React Router le pasa al loader:
params = { id: "45" }

Si el usuario entra a:
/about

Como :id? tiene signo de ?, significa que es opcional
params = { id: undefined }

¿Qué significa esta sintaxis?
loader: ({ params }) => {
  console.log(params)
  return null
}

Esto es:
-un loader
-que recibe un objeto
-y del objeto extrae solo la propiedad params usando destructuring

El objeto completo que recibe un loader es:

{
  request,
  params,
  context
}

Pero casi siempre solo usamos params.

¿Qué significa :id? en la ruta?
path: "/about/:id?"

El signo ? significa:
El parámetro es opcional
La ruta acepta /about y /about/123

¿loader es una función?
Sí.
Es literalmente una función JavaScript normal, pero React Router le da un propósito especial:
preparar datos
validar
hacer fetch
leer params
lanzar errores (que van a un ErrorPage)
redirigir

Ejemplo simple:
si en la url es localhost:5173/about/Holapaco
esto se aplica:

loader: ({params}) => {
      console.log(params)
      return null
    }

{id: 'Holapaco'} 19:56' video grabacion clase 19


19:57'
Ejemplo aplicado a APIs 
loader: async ({ params }) => {
  const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id || 1}`)
    .then(res => res.json());

  return post;
}

Luego ese post se consume en tu componente con:
const post = useLoaderData();


RouterProvider “enciende” el router y hace que todo lo anterior funcione
Debe envolver tu aplicación a nivel raíz.


3. ¿Qué significa throw new Error("Failed to load post")?

lanza un error intencionalmente dentro del loader. 20:01'

Cuando haces un throw dentro de un loader:
el loader se detiene inmediatamente
return fetch(...) ya no se ejecuta (se ignora)
React Router detecta el error y NO renderiza <About />
en su lugar, renderiza el componente del errorElement
Así funcionan los errores controlados en React Router.

¿Qué hace errorElement?

errorElement: <div><h1>Error Loading Post</h1></div>
es el componente que React Router mostrará cuando falle:
el loader,
el action,
o el propio componente de la ruta.
Es como un “error boundary” específico para esa ruta.

React Router dice:
Si tu loader falla → muestro errorElement en lugar del componente principal.
Por eso, cuando el loader tira el error, tú ves en pantalla:
Error Loading Post

¿Cómo trabajan juntos throw new Error y errorElement?
loader: async ({params}) => {
  throw new Error("Failed to load post"); // Fuerza un error
  return fetch(...); // Nunca se ejecuta
}
Este error sube automáticamente.

Ruta con manejo de error:

ejemplo visto en primera instancia

{
    path: "/about/:id?",
    element: <About />,
    loader: async ({params}) => {
      throw new Error("Failed to load post"); 
      return fetch(`https://jsonplaceholder.typicode.com/posts/${params.id || 1}`)
      .then(res => res.json())
    },
    errorElement: <div><h1>Error Loading Post</h1></div> 
    },

{
  path: "/about/:id?",
  element: <About />,
  errorElement: <div><h1>Error Loading Post from API</h1></div>
}
Cuando React Router detecta un error en el loader →
no renderiza About y en su lugar usa el errorElement.

¿Cómo obtener información del error?

Si quieres mostrar más detalles, puedes usar:
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <h1>Error cargando datos</h1>
      <p>{error.message}</p>
    </div>
  );
}

errorElement: <div><h1>Error Loading Post</h1></div> (en el loader)

se trae de componente y es reemplazado por: 
import Error from './components/Error.jsx' (importaciones)
errorElement: <Error/> (en el loader)


Comparación entre ambas versiones de loader en manejo de errores (!res.ok) y .then

1) Loader con manejo explícito de errores:

loader: async ({ params }) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);

  if (!res.ok) {
    throw new Error("Post failed to load");
  }

  return res.json();
},
errorElement: <Error />

1.1 Qué significa?
se esta:
1.1.1 Haciendo la petición
const res = await fetch(...)

1.1.2 Verificando si la respuesta fue correcta
if (!res.ok) {
   throw new Error(...)
}
res.ok es false cuando la API responde:
404 (not found)
500 (internal error)
403 (forbidden)
cualquier error HTTP

1.1.3 Lanzando un error manualmente
Esto detiene el loader y envía el error al React Router.

1.1.4 React Router detecta el error y muestra:
errorElement: <Error />

Resultado: Si la API falla → no se ejecuta el componente Post, y se renderiza el componente <Error />.

2) Loader SIN manejo de error

loader: async ({ params }) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${params.id || 1}`)
    .then(res => res.json())
},
errorElement: <Error />

¿Qué pasa aquí?
👉 Se hace la petición
👉 Pero no se verifica si res.ok es false
👉 No se detectan errores HTTP
👉 No realiza throw
👉 No se entra a errorElement

⚠ Entonces:

Si la API responde:
404
500
cualquier error

El .json() igual se ejecuta, y puede causar:
Un objeto vacío
Un undefined
Un error en el componente (post.title falla)
Pero errorElement NO aparece, porque nunca hubo un throw.

Resultado:
El error no es manejado por React Router.
⚠ Puede romper el componente About/Post internamente.


*/

