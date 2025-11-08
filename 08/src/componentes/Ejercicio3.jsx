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
      {productos.map((producto) => (
        <Producto key={producto.id} nombre={producto.nombre} precio={producto.precio} />
      ))}
    </div>
  );
};

export default Ejercicio3;


/* 4) ¿Cómo fluye todo? (paso a paso) 

Paso 1: .map()

productos.map((producto) => (
  <Producto ... />
))

React hace:
producto: { id:1, nombre:"Laptop", precio:1200 }
Renderiza:
<Producto nombre="Laptop" precio={1200} />

Iteración 2:
producto: { id:2, nombre:"Celular", precio:800 }
Renderiza:
<Producto nombre="Celular" precio={800} />

Iteración 3:
producto: { id:3, nombre:"Tablet", precio:500 }
Renderiza:
<Producto nombre="Tablet" precio={500} />


Paso 2: Cada <Producto /> recibe props
<Producto nombre="Laptop" precio={1200} />
Por ejemplo:
Dentro de Producto, esos props (estilo) se usan así:
<p>{nombre}</p>
<p>Precio: ${precio}</p>

Paso 3: Cada Producto se envuelve en su <div className="producto">
Así que el resultado final en pantalla es:
-----------------
| Laptop        |
| Precio: $1200 |
-----------------

-----------------
| Celular       |
| Precio: $800  |
-----------------

-----------------
| Tablet        |
| Precio: $500  |
-----------------

Todo esto dentro del contenedor <div className="ej3">.

*/