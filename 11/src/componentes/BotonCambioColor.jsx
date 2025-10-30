import { useState } from "react";
import "./BotonCambioColor.css";

export default function BotonCambioColor() {
  const [activo, setActivo] = useState(false); /*crea el estado activo (get)*/

  const cambiar = () => {
    setActivo(!activo); /* llama setActivo(!activo) para alternar.*/
  };

  return (
    <button
      onClick={cambiar}
      className={activo ? "boton boton--activo" : "boton"} /*El className depende del estado: "boton" (inactivo) o "boton boton--activo" (activo)*/
    >
      {activo ? "¡Activado!" : "Haz clic aquí"}
    </button> /* como si se escribiera en HTML dentro del buton solamente que aqui es con {} */
  );
}
