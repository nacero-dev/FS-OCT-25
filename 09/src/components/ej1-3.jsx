import React from "react";
import "./ej1-3.css";

function Saludo({ nombre }) {
  return <h1 className="saludo">Hola, {nombre}!</h1>;
}

export default Saludo;