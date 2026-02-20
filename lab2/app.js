import PokemonsFetch from "./components/PokemonsFetch";
import PokemonsGPT from "./components/PokemonsGPT";

function App() {
  return (
    <div>
      <h1>Lab 2 - Hooks y Fetch API</h1>
      <PokemonsFetch />
      <hr />
      <PokemonsGPT />
    </div>
  );
}

export default App;