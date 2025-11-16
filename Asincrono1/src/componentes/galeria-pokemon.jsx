import { useState, useEffect } from "react";

function GaleriaPokemon() { /*se define componente de React para la API*/
  const [pokemons, setPokemons] = useState([]); /*pokemons: valor actual (inicia como array vacio []), "setPokemons": funcion que actualiza valor de "pokemons", "useState([])" valor inicial: un array vacío, posteriormente se guardara lo que se traiga de  la API".*/

  useEffect(() => { 
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
      .then((response) => response.json())
      .then((data) => setPokemons(data.results))
      .catch((error) => console.log("Error:", error));
  }, []); 

  /*
  
  Se realiza la inicializacion, en un inicio se deja array de dependencias vacío [] que ejecuta el estado solo una vez, cuando se monta el componente
  Se llama a la API fetch("https://pokeapi.co/api/v2/pokemon?limit=10"), esa URL devuelve un JSON con los primeros 10 pokemon "limit=10"
  Cuando llega la respuesta se convierte a json, una vez que se obtiene en json, se hace el .then con data, objeto con toda la respuesta
  data.results es el array donde viene cada pokemon con su nombre y url, setPokemons(data.results): actualiza el estado con ese array
  Se vuelve a renderizar ya con los 10 elementos pokemon
  Si algo sale mal, entonces .catch(error) se imprime el error en la consola
  
  
  */

  return (
    <div className="galeria"> 
      {pokemons.map((pokemon, index) => (
        <div key={index} className="tarjeta">
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
          />
          <p>{pokemon.name}</p>
        </div>
      ))}
    </div>
  );
}

/* <div className="galeria"> 
Este div es el contenedor de todas las tarjetas (con grid en CSS)
con map se recorre todo el array de los datos "pokemon" del get, obtenidos en la API , el cual cada uno tiene su index de posicion en el array, que servira como key
a cada uno se le hace una tarjeta con img "raw.githubusercontent.com/PokeAPI"
se utiliza template string y se le pone index+1 dado a que la API empieza en 1 y el index en el array en "0"




*/

export default GaleriaPokemon;

