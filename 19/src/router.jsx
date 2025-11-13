import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./componentes/home";
import About from "./componentes/about";
import User from "./componentes/user";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
    { path: "/user/:id", element: <User /> }, /*aqui es donde el id se vuelve relevante, en app.jsx se acota muestra a "user/1" y en user se muestra {id } */
    ],
  },
]);

export default function MyRouter() {
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


*/