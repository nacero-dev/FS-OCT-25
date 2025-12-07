/* "##" camino paso a paso front end 1. */

import {RouterProvider} from 'react-router-dom'
import {router} from './routers/routers.jsx'
import './App.css'

function App() {
    return (
    <>
      <h1>Dia 24 - Conexión con Backend</h1>
      <RouterProvider router={router} />
    </>
  )
}

export default App

/* 
"##"
1.
Cuando ejecutas npm run dev en el frontend, React carga App.jsx,
que a su vez carga el router (routers.jsx).
Esto activa la navegación de React Router (sin recargar la página).
--> routers.jsx
*/