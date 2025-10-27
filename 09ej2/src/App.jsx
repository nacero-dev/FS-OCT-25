import React from "react";
import Boton from "./componentes/ej2-1";
import Tarea from "./componentes/ej2-2";
import Avatar from "./componentes/ej2-3";


function App() {
  const manejarClick = () => {
    alert("Botón presionado");
  };

  return (
    <div>
      <Boton texto="Haz clic aquí" onClick={manejarClick} />
      <Tarea texto="Estudiar React" completada={false} />
      <Avatar url="https://oboi-telefon.ru/wallpapers/64837/39113.jpg" />
    </div>
  );
}

export default App;