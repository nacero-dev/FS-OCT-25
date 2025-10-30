import React from "react";
import "./App.css";
import Ej1_1 from "./componentes/Ej1_1";
import Ej1_2 from "./componentes/Ej1_2";
import Ej1_3 from "./componentes/Ej1_3";
import Ej2_1 from "./componentes/Ej2_1";
import Ej2_2 from "./componentes/Ej2_2";
import Ej2_3 from "./componentes/Ej2_3";

function App() {
  return (
    <div className="app">
      <h1>Nivel 1</h1>

      <h2>Ej1-1 Aplica Inline Styles</h2>
      <Ej1_1 />

      <h2>Ej1-2 Usa un Objeto de Estilos</h2>
      <Ej1_2 />

      <h2>Ej1-3 Estilos Dinámicos con useState</h2>
      <Ej1_3 />

      <hr />

      <h1>Nivel 2</h1>

      <h2>Ej2-1 Hover con Inline Styles</h2>
      <Ej2_1 />

      <h2>Ej2-2 Combinación de Estilos</h2>
      <Ej2_2 />

      <h2>Ej2-3 Estilos Responsivos con window.innerWidth</h2>
      <Ej2_3 />
    </div>
  );
}

export default App;
