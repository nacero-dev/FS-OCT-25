import FakestoreApi from "./componentes/fakestore-api.jsx";
import RandomuserApi from "./componentes/randomuser-api.jsx";
import PokemonApi from "./componentes/pokemon-api.jsx";
import "./App.css";

function App() {
  return (
    <>
      <h1>Consolidado de APIs</h1>

      <FakestoreApi />
      <RandomuserApi />
      <PokemonApi />
    </>
  );
}

export default App;
