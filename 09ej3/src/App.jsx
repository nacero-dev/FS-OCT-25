import React from "react";
import Tarjeta from "./componentes/Tarjeta";
import Contenedor from "./componentes/Contenedor";
import Alerta from "./componentes/Alerta";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Contenedor>
        <Tarjeta>
          <h3>Contenido dentro de Tarjeta</h3>
          <p>Este texto está pasado como children.</p>
        </Tarjeta>

        <Alerta>
          <strong>¡Atención!</strong> Este es un mensaje dentro de Alerta.
        </Alerta>
      </Contenedor>
    </div>
  );
}

export default App;
