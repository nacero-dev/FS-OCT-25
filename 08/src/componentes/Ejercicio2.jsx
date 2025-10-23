import React from "react";
import "./Ejercicio2.css";

const Ejercicio2 = () => {
  const frutas = ["Manzana", "Banana", "Cereza", "Durazno", "Fresa"];

  return (
    <div className="ej2">
      <ul>
        {frutas.map((fruta, index) => (
          <li key={index}>{fruta}</li>
        ))}
      </ul>
    </div>
  );
};

export default Ejercicio2;
