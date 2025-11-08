import { useState } from "react";

const Ejercicio5 = () => {
  const productos = [
    { id: 1, nombre: "Laptop", precio: 1200 },
    { id: 2, nombre: "Celular", precio: 800 },
    { id: 3, nombre: "Tablet", precio: 500 },
  ];

  const productosFiltrados = productos.filter(
    (producto) => producto.precio > 700
  );

  return (
    <div className="ej5">
      {productosFiltrados.map((producto) => (
        <div key={producto.id} className="producto">
          <p>{producto.nombre}</p>
          <p>Precio: ${producto.precio}</p>
        </div>
      ))}
    </div>
  );
};

export default Ejercicio5;

/* Paso a Paso

Iteración 1

Elemento: { id:1, nombre:"Laptop", precio:1200 }
Check:
1200 > 700 → true ✅

Se agrega a productosFiltrados.

Iteración 3

Elemento: { id:3, nombre:"Tablet", precio:500 }
Check:
500 > 700 → false ❌
No se agrega.


Resultado final del filtro
[
  { id: 1, nombre: "Laptop", precio: 1200 },
  { id: 2, nombre: "Celular", precio: 800 }
]

) Renderizado con .map()
Una vez que tienes el array filtrado, lo muestras:

<div>
  {productosFiltrados.map((producto) => (
    <div key={producto.id}>
      <p>{producto.nombre}</p>
      <p>Precio: ${producto.precio}</p>
    </div>
  ))}
</div>


*/