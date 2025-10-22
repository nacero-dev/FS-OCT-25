import React from "react";
import ListaFrutas from "./components/ListaFrutas";
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
      <ListaFrutas frutas={frutas} />
      <ListaTareas tareas={tareas} />
    </div>
  );
}

export default App;