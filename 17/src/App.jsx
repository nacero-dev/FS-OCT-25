import FocoInput from "./componentes/foco-input";
import ContadorRenders from "./componentes/contador-renders";
import ContadorAnterior from "./componentes/contador-anterior";

export default function App() {
  return (
    <div>
      <h1>Ejercicios useRef</h1>

      <h2>EJ1. Foco automático</h2>
      <FocoInput />

      <h2>EJ2. Contador con renders</h2>
      <ContadorRenders />

      <h2>EJ3. Contador actual y anterior</h2>
      <ContadorAnterior />
    </div>
  );
}
