import { useContext } from "react";
import PreviousCounterContext from "../context/PreviousCounterContext";

export default function PreviousCounter() {
  const { count, setCount, previous } = useContext(PreviousCounterContext);

  return (
    <div>
      <p>Actual: {count}</p>
      <p>Anterior: {previous.current}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
}
