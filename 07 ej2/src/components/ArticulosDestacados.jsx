import React from "react";
import ArticuloCard from "./ArticuloCard";
import "./ArticulosDestacados.css";

const ArticulosDestacados = ({ articulos }) => {
  const articulosFiltrados = articulos.filter((articulo) => articulo.destacado);

  return (
    <div className="articulos-destacados">
      <h2 className="articulos-destacados__titulo">Artículos Destacados</h2>

      {articulosFiltrados.length > 0 ? (
        articulosFiltrados.map((articulo, index) => (
          <ArticuloCard
            key={index}
            titulo={articulo.titulo}
            contenido={articulo.contenido}
          />
        ))
      ) : (
        <p className="articulos-destacados__mensaje">
          No hay artículos destacados por ahora.
        </p>
      )}
    </div>
  );
};

export default ArticulosDestacados;
