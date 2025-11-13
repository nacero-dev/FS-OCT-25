import { Outlet, NavLink } from "react-router-dom";

/*!!! FALTA METER POST Y ERROR !!!*/

export default function App() {
  return (
    <div>
      <nav>
        <ul className="nav-list">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/user/1">User</NavLink></li>
        </ul>
      </nav>
      <hr />
      <Outlet /> 
    </div>
  );
}

/* 

Como App es el element del path raíz ("/"), siempre se renderiza al inicio.
Outlet renderiza las paginas hijas en una seccion abajo
Detalles útiles de NavLink:
Puede aplicar estilos activos automáticamente. 
Si algún día quieres resaltar la ruta activa, puedes usar su prop className como función
y devolver una clase cuando isActive sea true.
Contiene un menú con <NavLink> (permite cambiar de ruta sin recargar la página).
el layout principal (App) se muestra y deja un hueco para las rutas hijas (Home, About, User).


El flujo completo queda así:

index.html
   ↓
main.jsx  →  ReactDOM.render(<MyRouter />)
   ↓
my-router.jsx  →  <RouterProvider router={router}>
   ↓
App.jsx (layout principal con menú y <Outlet />)
   ↓
Ruta hija (Home / About / User según la URL)

*/

