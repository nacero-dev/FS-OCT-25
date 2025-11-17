import { useEffect, useState } from "react";
import PokemonItem from "./pokemon-item.jsx";
import "./pokemon.css";

function PokemonApi() {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        let controller = new AbortController();

        let options = {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            signal: controller.signal
        };

        fetch("https://pokeapi.co/api/v2/pokemon?limit=10", options)
            .then(res => res.json())
            .then(async (data) => { /* se usa async para poder utilizar await dentro del then, */

                const detalles = await Promise.all( /*Promise.all sirve para hacer todas las peticiones al mismo tiempo no solo uana por una, espera a que todas terminen y devuelve un array con todas las respuestas completas de todos los pokemones detallados https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all*/
                    data.results.map(async (pokemon) => { /* data.results será la lista de 10 pokemons*/
                        const res = await fetch(pokemon.url); /*peticion individual para entrar al pokemon individualmente*/
                        return await res.json(); /*devuelve info detallada de pokemonoes*/
                    })
                );

                setPokemons(detalles); /* se actualiza el state con altura, peso, imagen, sprites) */
            })

            .catch((err) => console.log(err))
            .catch(err => console.log(err))
            .finally(() => controller.abort());

    }, []);

    return (
        <div className="api-box">
            <h2>Pokémon API</h2>

            {pokemons.map((pokemon, index) => (
                <PokemonItem key={index} {...pokemon} /> /* El operador spread (...pokemon) significa: "Toma todas las propiedades del objeto Pokémon y envíalas como props individualesm dentro de  pokemon-item.jsx, se recibe "function PokemonItem({ name, height, weight, sprites }) {"" */
            ))}
        </div>
    );
}

export default PokemonApi;
