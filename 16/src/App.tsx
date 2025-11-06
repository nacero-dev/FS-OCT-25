import { useState } from "react";
import FormularioNombre from "./componentes/formulario-nombre";
import ListaTareas from "./componentes/lista-tareas";
import UsuarioCard from "./componentes/usuario-card";

function sumar(a: number, b: number): number {
  return a + b;
}

function App() {
  const resultadoSuma = sumar(5, 7);

  const usuarioDemo = {
    nombre: "Laura",
    edad: 29,
    activo: true,
  };

  return (
    <div>
      <h1>Ejercicios React + TS</h1>

      <h2>Formulario</h2>
      <FormularioNombre />

      <h2>Suma</h2>
      <p>Resultado: {resultadoSuma}</p>

      <h2>Tareas</h2>
      <ListaTareas />

      <h2>Usuario</h2>
      <UsuarioCard usuario={usuarioDemo} />
    </div>
  );
}

export default App;
