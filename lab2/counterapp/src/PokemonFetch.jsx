import { useState, useEffect } from "react";

export const PokemonFetch = () => {

  const [pokemon, setPokemon] = useState(null);

  const getPokemon = async () => {
    const resp = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
    const data = await resp.json();
    setPokemon(data);
  };

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <div>
      <h1>Pokemon API</h1>

      {pokemon ? (
        <>
          <h2>{pokemon.name}</h2>
          <img src={pokemon.sprites.front_default} />
          <p>Peso: {pokemon.weight}</p>
          <p>Altura: {pokemon.height}</p>
          <p>Tipo: {pokemon.types[0].type.name}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}

    </div>
  );
};