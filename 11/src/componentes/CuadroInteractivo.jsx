import { useState } from "react";
import "./CuadroInteractivo.css";

export default function CuadroInteractivo() {
  const [borde, setBorde] = useState(false);
  const [color, setColor] = useState(false);

  return (
    <div
      className={`cuadro ${color ? "cuadro--hover" : ""} ${borde ? "cuadro--borde" : ""}`} /*condición ? valorSiTrue : valorSiFalse*/
      onMouseEnter={() => setColor(true)} /*define el estado useState, si true entonces setColor (true) por lo que cuadro--hover */
      onMouseLeave={() => setColor(false)} /*define el estado useState, si false entonces setColor (false) por lo que "" */
      onClick={() => setBorde(true)} /*Esto cambia el estado borde a true, así que la clase cuadro--borde se añade permanentemente. */
    ></div>
  );
}
