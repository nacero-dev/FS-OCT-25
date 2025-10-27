import React from "react";
import "./ej2-1.css";

function Boton({ texto, onClick }) {
  return (
     <button className="boton" onClick={onClick}> 
      {texto}
    </button>
  );
}
//este onClick tiene implicita la funcion manejarClick que es la cuando recibe el onClick ejecuta y saca un alert

export default Boton;