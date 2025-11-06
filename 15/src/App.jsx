import React from "react";
import PokemonBuscador from "./componentes/pokemon-buscador";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h1>Pokédex React</h1>
      <PokemonBuscador />
    </div>
  );
}

export default App;
