import React, { useState, useEffect } from "react";
import ListaFrutas from "./components/ListaFrutas";
import ListaTareas from "./components/ListaTareas";
import ArticulosDestacados from "./components/ArticulosDestacados";

function App() {
  const frutas = ["Manzana", "Plátano", "Fresa", "Uva"];

  const tareas = [
    { nombre: "Estudiar React", completada: true },
    { nombre: "Hacer la compra", completada: false },
    { nombre: "Practicar surf", completada: false },
  ];

  const articulos = [
    { titulo: "React Hooks", contenido: "Aprende sobre useState y useEffect", destacado: true },
    { titulo: "JavaScript Moderno", contenido: "ES6, async/await, módulos...", destacado: false },
    { titulo: "CSS Modules", contenido: "Estilos aislados en React", destacado: true },
  ];

  // Estado para contar artículos destacados
  const [contadorDestacados, setContadorDestacados] = useState(0);

  // Actualiza el contador cuando cambia el array de artículos
  useEffect(() => {
    const destacados = articulos.filter((art) => art.destacado).length;
    setContadorDestacados(destacados);
  }, [articulos]);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Mis Listas y Artículos</h1>

      <ListaFrutas frutas={frutas} />
      <ListaTareas tareas={tareas} />

      <h2 style={{ textAlign: "center" }}>
        Artículos destacados: {contadorDestacados}
      </h2>
      <ArticulosDestacados articulos={articulos} />
    </div>
  );
}

export default App;
