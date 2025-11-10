import React from "react";
import "./ListaUsuarios.css";

const ListaUsuarios = ({ users }) => {
  return (
    <div className="lista-usuarios">
      <h2 className="lista-usuarios__titulo">Lista de Usuarios</h2>

      <ul className="lista-usuarios__lista">
        {users.map((user) => (
          <li key={user.id} className="lista-usuarios__item">
            {user.nombre}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaUsuarios;
