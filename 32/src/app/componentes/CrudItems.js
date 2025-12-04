"use client";
import { useState, useEffect } from "react";

export default function CrudItems() {
  const [items, setItems] = useState([]);
  const [nuevo, setNuevo] = useState("");
  const [editandoId, setEditandoId] = useState(null);
  const [nombreEditado, setNombreEditado] = useState("");
  const [loading, setLoading] = useState(false);
  const [mensaje, setMensaje] = useState("");

  async function obtenerItems() {
    setLoading(true);
    try {
      const res = await fetch("/api/items");
      const data = await res.json();
      setItems(data.items || []);
    } catch {
      setMensaje(" Error al cargar los items");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    obtenerItems();
  }, []);

  async function agregarItem(e) {
    e.preventDefault();
    setLoading(true);
    setMensaje("");
    try {
      const res = await fetch("/api/items", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre: nuevo }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Error al crear");
      setMensaje(" Item agregado correctamente");
      setNuevo("");
      obtenerItems();
    } catch (error) {
      setMensaje(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function eliminarItem(id) {
    setLoading(true);
    setMensaje("");
    try {
      const res = await fetch("/api/items", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Error al eliminar");
      setMensaje(" Item eliminado correctamente");
      obtenerItems();
    } catch (error) {
      setMensaje(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function actualizarItem(id) {
    setLoading(true);
    setMensaje("");
    try {
      const res = await fetch("/api/items", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, nuevoNombre: nombreEditado }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Error al actualizar");
      setMensaje(" Item actualizado correctamente");
      setEditandoId(null);
      setNombreEditado("");
      obtenerItems();
    } catch (error) {
      setMensaje(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center gap-4 mt-6 w-full max-w-md">
      <h2 className="text-2xl font-bold">CRUD con validaciones</h2>

      <form onSubmit={agregarItem} className="flex gap-2">
        <input
          type="text"
          value={nuevo}
          onChange={(e) => setNuevo(e.target.value)}
          placeholder="Nuevo item"
          className="border border-gray-400 rounded-md p-2 flex-1"
        />
        <button
          type="submit"
          className="bg-gray-800 text-white rounded-md px-4 py-2"
          disabled={loading}
        >
          {loading ? "Cargando..." : "Añadir"}
        </button>
      </form>

      {mensaje && <p className="text-sm text-center">{mensaje}</p>}

      {loading ? (
        <p className="text-gray-500"> Cargando datos...</p>
      ) : items.length === 0 ? (
        <p>No hay items</p>
      ) : (
        <ul className="w-full">
          {items.map((item) => (
            <li
              key={item._id}
              className="flex justify-between items-center border-b border-gray-300 py-2"
            >
              {editandoId === item._id ? (
                <>
                  <input
                    value={nombreEditado}
                    onChange={(e) => setNombreEditado(e.target.value)}
                    className="border border-gray-400 rounded-md p-1"
                  />
                  <button
                    onClick={() => actualizarItem(item._id)}
                    className="bg-blue-600 text-white px-3 py-1 rounded-md"
                    disabled={loading}
                  >
                    Guardar
                  </button>
                </>
              ) : (
                <>
                  <span>{item.nombre}</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        setEditandoId(item._id);
                        setNombreEditado(item.nombre);
                      }}
                      className="bg-yellow-500 text-white px-3 py-1 rounded-md"
                      disabled={loading}
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => eliminarItem(item._id)}
                      className="bg-red-600 text-white px-3 py-1 rounded-md"
                      disabled={loading}
                    >
                      Eliminar
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
