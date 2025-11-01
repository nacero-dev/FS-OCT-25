import React from "react";
import "./Contenedor.css";

function Contenedor({ children }) {
  return <section className="contenedor">{children}</section>;
}

export default Contenedor;
