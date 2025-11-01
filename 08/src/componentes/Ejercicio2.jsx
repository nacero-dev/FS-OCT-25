import React from "react";
import "./Ejercicio2.css";

const Ejercicio2 = () => {
  const frutas = ["Manzana", "Banana", "Cereza", "Durazno", "Fresa"];

  return (
    <div className="ej2">
      <ul>
        {frutas.map((fruta, index) => ( 
          
          /*siempre primero el elemento y despues el indice, no se puede invertir, 
          la sintaxis oficial array.map((elemento, indice, arrayCompleto) => {}); 
          Primer parámetro → el elemento actual del array
          Segundo parámetro → el índice (la posición del elemento)
          (Opcional) Tercer parámetro → el array completo (rara vez se usa)*/
          
          <li key={index}>{fruta}</li>
        ))}
      </ul>
    </div>
  );
};

export default Ejercicio2;
