 import "./App.css";
import BotonCambioColor from "./componentes/BotonCambioColor";
import CuadroInteractivo from "./componentes/CuadroInteractivo";
import ChangeList from "./componentes/ChangeList";

function App() {
  return (
    <div className="app">
      <h2>Nivel 1</h2>
      <h3>Ej 1</h3>
      <BotonCambioColor />
      <h3>Ej 2</h3>
      <CuadroInteractivo />
      <h2>Nivel 2</h2>
      <h3>Ej 1</h3>
      <ChangeList/>

    </div>
  );
}

export default App