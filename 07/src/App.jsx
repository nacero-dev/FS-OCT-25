import React from "react";
import Antonio from "./components/ListaFrutas";
import ListaTareas from "./components/ListaTareas";

function App() {
  const frutas = ["Manzana", "Plátano", "Fresa", "Uva"];
  const tareas = [
    { nombre: "Estudiar React", completada: true },
    { nombre: "Hacer la compra", completada: true },
    { nombre: "Practicar surf", completada: true },
  ];

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Mis Listas</h1>
      <Antonio fruits={frutas} />
      <ListaTareas tareas={tareas} />
    </div>
  );
}

export default App;