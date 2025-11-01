import React from "react";
import "./Listafrutas.css";

const Listafruits = ({ fruits }) => {
  return (
    <div className="lista-frutas">
      <h2 className="lista-frutas__titulo">Lista de fruits</h2>
      <p className="lista-frutas__total">
        Total de fruits: {fruits.length}
      </p>
      <ul className="lista-frutas__lista">
        {fruits.map((fruit, index) => (
          <li key={index} className="lista-frutas__item">
            {fruit}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Listafruits;
