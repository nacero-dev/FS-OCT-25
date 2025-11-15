import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./componentes/home";
import About from "./componentes/about";
import User from "./componentes/user";
import Post, { postLoader } from "./componentes/post";
import ErrorPage from "./componentes/error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/user/:id", element: <User /> }, /* los ":" significa que la ruta es opcional */
      {
        path: "/post/:id",
        element: <Post />,
        loader: postLoader,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}


/*

createBrowserRouter([...]) define el árbol de rutas.

Nodo raíz:

path: "/" y element: <App /> → siempre se renderiza App y,
dentro de su <Outlet />, aparecerá la ruta hija que coincida.

Hijas:

{ path: "/", element: <Home /> } → ruta de inicio (Home).
{ path: "/about", element: <About /> }.
{ path: "/user/:id", element: <User /> } → ruta dinámica.

RouterProvider “enciende” el router y hace que todo lo anterior funcione
Debe envolver tu aplicación a nivel raíz.


Cómo fluye todo:

Entra a /:

Se renderiza App (layout).

Dentro del <Outlet />, el router coloca <Home />.

clic en “About”:

La URL cambia a /about sin recargar.

App se mantiene; en el <Outlet /> aparece <About />.

“User”:

URL /user/1.

App se mantiene; en el <Outlet /> aparece <User />.

useParams() lee { id: "1" } y se muestra.

El array de children son las rutas que se renderizan dentro de App, en su <Outlet />.

toda la navegación ocurre en memoria, sin recargar el sitio, manteniendo estado y rendimiento.

Los componentes finales se renderizan

Ejemplo: Home.jsx, About.jsx, User.jsx
Cada uno devuelve el contenido específico de esa “página”.

Home → <h2>Home Page</h2>

About → <h2>About Page</h2>

User → Usa useParams() para leer el parámetro dinámico id de la URL.
El componente apropiado aparece dentro del layout de App.

¿Por qué existe errorElement?
Porque React Router quiere separar:
  Las pantallas “normales”
  De las pantallas de error cuando algo falla
Aqui:
{
  path: "/post/:id",
  element: <Post />,
  loader: postLoader,
  errorElement: <ErrorPage />,
}
dice:
“Si la ruta carga bien → renderiza <Post />
Si falla → renderiza <ErrorPage /> y pásale el error que ocurrió.”
el componente Post se mantiene limpio y no necesita try/catch.



*/