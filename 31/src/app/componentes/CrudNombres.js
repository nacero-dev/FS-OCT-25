"use client";

import { useEffect, useState } from "react";

export default function CrudNombres() {
  const [nombres, setNombres] = useState([]);
  const [nuevoNombre, setNuevoNombre] = useState("");
  const [editandoId, setEditandoId] = useState(null);
  const [nombreEditado, setNombreEditado] = useState("");

  // Obtener lista inicial
  useEffect(() => {
    obtenerNombres();
  }, []);

  const obtenerNombres = async () => {
    const res = await fetch("/api/nombres");
    const data = await res.json();
    setNombres(data.nombres);
  };

  const agregarNombre = async (e) => {
    e.preventDefault();
    if (!nuevoNombre.trim()) return;
    await fetch("/api/nombres", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre: nuevoNombre }),
    });
    setNuevoNombre("");
    obtenerNombres();
  };

  const eliminarNombre = async (id) => {
    await fetch("/api/nombres", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    obtenerNombres();
  };

  const actualizarNombre = async (id) => {
    if (!nombreEditado.trim()) return;
    await fetch("/api/nombres", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, nuevoNombre: nombreEditado }),
    });
    setEditandoId(null);
    setNombreEditado("");
    obtenerNombres();
  };

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-md mt-6">
      <h2 className="text-2xl font-bold">Gestión de nombres (CRUD)</h2>

      {/* Formulario agregar */}
      <form onSubmit={agregarNombre} className="flex gap-2 w-full">
        <input
          type="text"
          value={nuevoNombre}
          onChange={(e) => setNuevoNombre(e.target.value)}
          placeholder="Nuevo nombre"
          className="border border-gray-400 rounded-md p-2 flex-1"
        />
        <button
          type="submit"
          className="bg-gray-800 text-white rounded-md px-4 py-2"
        >
          Añadir
        </button>
      </form>

      {/* Lista */}
      <ul className="w-full border-t border-gray-300 pt-4">
        {nombres.length === 0 ? (
          <p className="text-gray-700 text-center">No hay nombres guardados</p>
        ) : (
          nombres.map((nombre) => (
            <li
              key={nombre.id}
              className="flex justify-between items-center border-b border-gray-200 py-2"
            >
              {editandoId === nombre.id ? (
                <>
                  <input
                    type="text"
                    value={nombreEditado}
                    onChange={(e) => setNombreEditado(e.target.value)}
                    className="border border-gray-400 rounded-md p-1 flex-1 mr-2"
                  />
                  <button
                    onClick={() => actualizarNombre(nombre.id)}
                    className="bg-blue-600 text-white px-3 py-1 rounded-md"
                  >
                    Guardar
                  </button>
                </>
              ) : (
                <>
                  <span className="text-lg">{nombre.nombre}</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        setEditandoId(nombre.id);
                        setNombreEditado(nombre.nombre);
                      }}
                      className="bg-yellow-500 text-white px-3 py-1 rounded-md"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => eliminarNombre(nombre.id)}
                      className="bg-red-600 text-white px-3 py-1 rounded-md"
                    >
                      Eliminar
                    </button>
                  </div>
                </>
              )}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
