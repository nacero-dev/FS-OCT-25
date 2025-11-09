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
      className={activo ? "boton boton--activo" : "boton"} /*El className depende 
      del estado: "boton" (inactivo) o "boton boton--activo" (activo)*/
    >
      {activo ? "¡Activado!" : "Haz clic aquí"}
    </button> /* como si se escribiera en HTML dentro del buton solamente que aqui
     es con {} */
  );
}

/*

🧱 1️⃣Cómo funciona la cascada en CSS

En CSS, cuando dos clases afectan al mismo elemento, el navegador combina sus estilos.

Por ejemplo:

<button class="boton boton--activo"></button>

El navegador busca ambas reglas:

.boton {
  background-color: lightcoral;
  color: black;
  padding: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.boton--activo {
  background-color: lightgreen;
}

y fusiona todo en una sola “hoja de estilos” interna para ese elemento.




🧩 2️⃣ Qué pasa con las propiedades repetidas

Si las dos clases tienen la misma propiedad, gana la que aparece más abajo (o la más específica).

En este caso:

.boton define → background-color: lightcoral;

.boton--activo define → background-color: lightgreen;

El navegador aplica primero .boton, y luego la sobrescribe con .boton--activo.
Resultado final:
✅ background-color: lightgreen;

El resto de las propiedades de .boton (padding, border-radius, etc.) se mantienen intactas.

*/

