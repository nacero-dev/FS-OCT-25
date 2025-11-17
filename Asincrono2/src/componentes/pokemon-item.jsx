function PokemonItem({ name, height, weight, sprites }) { /* viene como prop de pokemon-api.jsx*/
  return (
    <div className="item-card">
      <p><strong>Nombre:</strong> {name}</p>
      <p><strong>Altura:</strong> {height}</p>
      <p><strong>Peso:</strong> {weight}</p>
      <p><strong>Imagen:</strong></p>

      {sprites?.front_default && (
        <img src={sprites.front_default}/> /*encadenamiento opcional: Si sprites existe, entonces intenta acceder a front_default. Si no existe, NO lances error, solo devuelve undefined, si si renderiza la imagen*/
      )}
    </div>
  );
}

export default PokemonItem;