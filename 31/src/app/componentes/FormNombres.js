"use client";

import { useState } from "react";

export default function FormNombres() {
  const [nombre, setNombre] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/nombres", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre }),
    });

    const data = await res.json();

    if (data.recibido) {
      setMensaje(`Nombre "${data.nombre}" guardado con éxito`);
      setNombre("");
    } else {
      setMensaje("Error al guardar el nombre");
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 mt-6">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Escribe un nombre"
          className="border border-gray-400 rounded-md p-2"
        />
        <button
          type="submit"
          className="bg-gray-800 text-white rounded-md px-4 py-2"
        >
          Enviar
        </button>
      </form>

      {mensaje && <p className="text-black text-lg">{mensaje}</p>}
    </div>
  );
}
