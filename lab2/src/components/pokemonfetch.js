import { useState, useEffect } from "react";

function PokemonsFetch() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
      .then((response) => response.json())
      .then((data) => {
        setPokemons(data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching Pokemons:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Lista de Pokemons</h2>
      {loading ? (
        <p>Cargando Pokemons...</p>
      ) : (
        <ul>
          {pokemons.map((p, index) => (
            <li key={index}>{p.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default PokemonsFetch;