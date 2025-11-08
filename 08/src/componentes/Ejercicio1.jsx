import React from "react";
import "./Ejercicio1.css";

const Ejercicio1 = () => {
  const numeros = [1, 2, 3, 4, 5];

  return (
    <div className="ej1">
      <ul>
        {numeros.map((numero, index) => (
          <li key={index}>Número: {numero}</li>
        ))}
      </ul>
    </div>
  );
};

export default Ejercicio1;
