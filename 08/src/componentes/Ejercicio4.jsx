import React from "react";
import "./Ejercicio4.css";

const Ejercicio4 = () => {
  const usuarios = [
    { id: 1, nombre: "Ana", edad: 25, ciudad: "Madrid" },
    { id: 2, nombre: "Luis", edad: 30, ciudad: "Barcelona" },
    { id: 3, nombre: "María", edad: 28, ciudad: "Valencia" },
  ];

  return (
    <div className="ej4">
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Ciudad</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => ( /*ver abajo*/
            <tr key={usuario.id}>
              <td>{usuario.nombre}</td>
              <td>{usuario.edad}</td>
              <td>{usuario.ciudad}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Ejercicio4;
 

/* 

Se recorre el array usuarios de izquierda a derecha y, en cada iteración de .map(), 
se crea una fila <tr> con tres celdas <td> (nombre, edad, ciudad) para ese usuario.
Luego sigue con el siguiente, y así sucesivamente. El orden lo marca el orden del array, 
no el id (el id se usa como key para que React identifique la fila).

Aquí va el paso a paso con tu ejemplo:

usuarios = [
  { id: 1, nombre: "Ana",   edad: 25, ciudad: "Madrid"   },
  { id: 2, nombre: "Luis",  edad: 30, ciudad: "Barcelona"},
  { id: 3, nombre: "María", edad: 28, ciudad: "Valencia" }
]

Qué hace .map() en tbody:

<tbody>
  {usuarios.map((usuario) => (
    <tr key={usuario.id}>
      <td>{usuario.nombre}</td>
      <td>{usuario.edad}</td>
      <td>{usuario.ciudad}</td>
    </tr>
  ))}
</tbody>

Resultado que React renderiza dentro de <tbody>
<tr key="1"><td>Ana</td><td>25</td><td>Madrid</td></tr>
<tr key="2"><td>Luis</td><td>30</td><td>Barcelona</td></tr>
<tr key="3"><td>María</td><td>28</td><td>Valencia</td></tr>

Dos matices importantes
Orden: es el del array, no el del id. Si cambias el orden del array, cambia el orden de las filas.
key: sirve para que React sepa qué fila es cuál cuando la lista cambie (agregar, eliminar, reordenar) y actualizar eficientemente.

*/