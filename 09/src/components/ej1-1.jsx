import React from "react";
import "./ej1-1.css";

function Perfil({ nombre, edad }) {
  return (
    <div className="perfil">
      <p>Nombre: {nombre}</p>
      <p>Edad: {edad}</p>
    </div>
  );
}

export default Perfil;