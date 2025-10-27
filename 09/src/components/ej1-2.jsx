import React from "react";
import "./ej1-2.css";

function Producto({ nombre, precio }) {
  return (
    <ul className="producto">
      <li>Nombre: {nombre}</li>
      <li>Precio: {precio} €</li>
    </ul>
  );
}

export default Producto;