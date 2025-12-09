import { RouterProvider } from "react-router-dom";
import { router } from "./routers/routers.jsx";
import "./App.css";

function App() {
  return (
    <>
      <h1>Gestor de Productos</h1>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

