import React from "react";
import Button from "./components/Button";
import "./App.css";

function App() {
  const handleClick = (text) => {
    alert(`Hiciste clic en: ${text}`);
  };

  return (
    <div className="app-container">
      <h1>Ejemplo de Botones con CSS</h1>

      <div className="button-grid">
        <Button text="Aceptar" onClick={() => handleClick("Aceptar")} />
        <Button text="Cancelar" onClick={() => handleClick("Cancelar")} />
      </div>
    </div>
  );
}

export default App;
