import { useEffect, useState } from "react";

function PokemonsGPT() {
  const [pokemonList, setPokemonList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
      .then((res) => res.json())
      .then((data) => {
        setPokemonList(data.results);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return (
    <div>
      <h2>API PokéAPI (con ayuda de GPT)</h2>

      {error && <p>Error: {error}</p>}

      <ul>
        {pokemonList.map((item, i) => (
          <li key={i}>{item.name.toUpperCase()}</li>
        ))}
      </ul>
    </div>
  );
}

export default PokemonsGPT;