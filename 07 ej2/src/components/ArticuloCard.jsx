import React from "react";
import "./ArticuloCard.css";

const ArticuloCard = ({ titulo, contenido }) => {
  return (
    <div className="articulo-card">
      <h3 className="articulo-card__titulo">{titulo}</h3>
      <p className="articulo-card__contenido">{contenido}</p>
    </div>
  );
};

export default ArticuloCard;
