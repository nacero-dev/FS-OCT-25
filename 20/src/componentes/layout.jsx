import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-white border-b p-4">
        <nav>
          <ul className="flex justify-center gap-6 text-sm">
            <li>
              <Link to="/" className="text-gray-700 hover:underline">
              Listado de tareas
              </Link>
            </li>
            <li>
              <Link to="/new-task" className="text-gray-700 hover:underline">
              Nueva tarea
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="flex-grow container mx-auto p-4">
        <Outlet />
      </main>

      <footer className="bg-white border-t text-center text-xs text-gray-500 py-3">
        © {new Date().getFullYear()} Gestor de Tareas
      </footer>
      
    </div>
  );
};

export default Layout;

/* 

En el manejo de rutas:
Layout maneja la estructura de la página
(header, menú " Listado de tareas, Nueva Tarea", <Outlet "renderizador"/>).
Permite que todas las rutas internas hereden la misma navegacion.
@task/:id
*/
