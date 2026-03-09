import { CounterApp } from "./CounterApp";
import { PokemonFetch } from "./PokemonFetch";

function App() {
  return (
    <>
      <CounterApp value={10} />
      <PokemonFetch />
    </>
  );
}

export default App;