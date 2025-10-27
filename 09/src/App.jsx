import React from "react";
import Perfil from "./components/ej1-1";
import Producto from "./components/ej1-2";
import Saludo from "./components/ej1-3";


function App() {
  return (
    <div>
      <Saludo nombre="Laura" />
      <Perfil nombre="Laura Gómez" edad={28} />
      <Producto nombre="Cámara Canon EOS" precio={599} />
    </div>
  );
}



export default App;