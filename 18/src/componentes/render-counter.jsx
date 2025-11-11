import { useContext } from "react";
import RenderCountContext from "../context/RenderCountContext";

export default function RenderCounter() {
  const { count, setCount, renders } = useContext(RenderCountContext);

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
      <p>Renders del componente: {renders.current}</p>
    </div>
  );
}
