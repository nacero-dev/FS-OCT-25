import React from "react";
import "./Listafrutas.css";

const Listafruits = ({ fruits }) => {
  return (
    <div className="lista-fruits">
      <h2 className="lista-fruits__titulo">Lista de fruits</h2>
      <p className="lista-fruits__total">
        Total de fruits: {fruits.length}
      </p>
      <ul className="lista-fruits__lista">
        {fruits.map((fruit, index) => (
          <li key={index} className="lista-fruits__item">
            {fruit}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Listafruits;
