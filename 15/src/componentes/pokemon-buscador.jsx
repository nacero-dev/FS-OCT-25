import React, { useState } from "react";
import PokemonDetalle from "./pokemon-detalle";

function PokemonBuscador() {
  const [nombre, setNombre] = useState("");
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);
  const [cargando, setCargando] = useState(false);

  const buscarPokemon = async () => {
    if (!nombre) return;
    setCargando(true);
    setError(null);
    setPokemon(null);

    try {
      const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre.toLowerCase()}`);
      if (!respuesta.ok) {
        throw new Error("Pokémon no encontrado");
      }
      const datos = await respuesta.json();
      setPokemon(datos);
    } catch (err) {
      setError(err.message);
    } finally {
      setCargando(false);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={nombre}
        placeholder="Introduce el nombre del Pokémon"
        onChange={(e) => setNombre(e.target.value)}
      />
      <button onClick={buscarPokemon}>Buscar</button>

      {cargando && <p>Cargando...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {pokemon && <PokemonDetalle pokemon={pokemon} />}
    </div>
  );
}

export default PokemonBuscador;
