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
          {usuarios.map((usuario) => (
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
