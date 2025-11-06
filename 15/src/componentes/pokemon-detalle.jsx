import React from "react";

function PokemonDetalle({ pokemon }) {
  return (
    <div style={{ marginTop: "1rem" }}>
      <h2>{pokemon.name.toUpperCase()}</h2>
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        width="150"
        height="150"
      />
      <p><strong>Peso:</strong> {pokemon.weight}</p>
      <p><strong>Altura:</strong> {pokemon.height}</p>
      <p><strong>Tipo:</strong> {pokemon.types.map(t => t.type.name).join(", ")}</p>
      <p><strong>Experiencia base:</strong> {pokemon.base_experience}</p>
    </div>
  );
}

export default PokemonDetalle;
