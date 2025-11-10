import { useState } from "react";
import "./Ejercicio6.css";

const Ejercicio6 = () => {
  const [busqueda, setBusqueda] = useState("");

  const usuarios = [
    { id: 1, nombre: "Ana" },
    { id: 2, nombre: "Luis" },
    { id: 3, nombre: "Carlos" },
    { id: 4, nombre: "Marta" },
  ];

  const usuariosFiltrados = usuarios.filter((usuario) =>
    usuario.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="ej6">
      <h3>Filtrar nombres</h3>

      <input
        type="text"
        placeholder="Buscar..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      <ul>
        {usuariosFiltrados.map((usuario) => (
          <li key={usuario.id}>{usuario.nombre}</li>
        ))}
      </ul>
    </div>
  );
};

export default Ejercicio6;


/*
Paso a Paso

1) Estado de búsqueda
const [busqueda, setBusqueda] = useState("");
Guarda lo que el usuario escribe.
React re-renderiza cada vez que cambia.


2) Array original
const usuarios = [...]
No cambia. Solo sirve como base.

3) Filtro dinámico
const usuariosFiltrados = usuarios.filter((usuario) =>
  usuario.nombre.toLowerCase().includes(busqueda.toLowerCase())
);

Esto significa:
Recorre cada usuario
Convierte su nombre a minúsculas
Convierte la búsqueda a minúsculas
Revisa si coincide (includes)
Ejemplo: si escribes "a" se muestran:
Ana ✅
Carlos ✅
Marta ✅


4) Input controlado
<input
  value={busqueda}
  onChange={(e) => setBusqueda(e.target.value)}
/>
value={busqueda} → el input muestra el estado
onChange → actualiza el estado cuando escribes

5) Renderizado final
<ul>
  {usuariosFiltrados.map((usuario) => (
    <li key={usuario.id}>{usuario.nombre}</li>
  ))}
</ul>
Solo se muestran los usuarios filtrados.

*/