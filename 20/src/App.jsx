import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import Layout from "./componentes/layout";
import Home from "./componentes/home";
import NewTask from "./componentes/new-task";
import TaskDetail from "./componentes/task-detail";
import Error from "./componentes/error";

import TaskProvider from "./provider/task-provider";

const router = createBrowserRouter([ /* Define todas las rutas usando createBrowserRoute */
  {
    path: "/", /* Home.jsx -> Listado de tareas + filtros */
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/", /* Home.jsx -> Listado de tareas + filtros */
        element: <Home />
      },
      {
        path: "/new-task", /*  NewTask.jsx -> Formulario para agregar tarea usando useRef */
        element: <NewTask />
      },
      {
        path: "/task/:id",
        element: <TaskDetail /> /* TaskDetail.jsx -> Ver información detallada de una tarea */
      }
    ]
  }
]);

/* Todas las rutas comparten a layout.jsx como layout comun */

function App() {
  return (
    <TaskProvider> 
      <RouterProvider router={router} />
    </TaskProvider>
  );
}

/* 

Se envuelve todo en <TaskProvider> para que el contexto funcione en cada página.
Se renderiza el sistema de rutas con <RouterProvider>

*/

export default App;
