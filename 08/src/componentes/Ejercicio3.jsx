import React from "react";
import "./Ejercicio3.css";

const Producto = ({ nombre, precio }) => {
  return (
    <div className="producto">
      <p>{nombre}</p>
      <p>Precio: ${precio}</p>
    </div>
  );
};

const Ejercicio3 = () => {
  const productos = [
    { id: 1, nombre: "Laptop", precio: 1200 },
    { id: 2, nombre: "Celular", precio: 800 },
    { id: 3, nombre: "Tablet", precio: 500 },
  ];

  return (
    <div className="ej3">
      {productos.map((item) => (
        <Producto key={item.id} nombre={item.nombre} precio={item.precio} />
      ))}
    </div>
  );
};

export default Ejercicio3;
