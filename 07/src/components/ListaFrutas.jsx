import React from "react";
import "./ListaFrutas.css";

const ListaFrutas = ({ frutas }) => {
  return (
    <div className="lista-frutas">
      <h2 className="lista-frutas__titulo">Lista de Frutas</h2>
      <p className="lista-frutas__total">
        Total de frutas: {frutas.length}
      </p>
      <ul className="lista-frutas__lista">
        {frutas.map((fruta, index) => (
          <li key={index} className="lista-frutas__item">
            {fruta}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaFrutas;
