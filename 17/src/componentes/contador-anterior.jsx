import { useState, useRef } from "react";

function ContadorAnterior() {
  const [count, setCount] = useState(0);
  const prevCount = useRef(0);      // Guarda el valor anterior

  const incrementar = () => {
    prevCount.current = count;      // Guarda el valor previo ANTES de actualizar
    setCount(count + 1);            // Actualiza el estado
  };

  return (
    <div>
      <p>Actual: {count}</p> 
      <p>Anterior: {prevCount.current}</p>

      <button onClick={incrementar}>
        Incrementar
      </button>
    </div>
  );
}

export default ContadorAnterior;

/*
1) Crear un ref para almacenar el valor anterior
const prevCount = useRef(0);

Este ref:
No provoca re-render
Conserva su valor entre renders
Es perfecto para almacenar el “valor anterior”



| Clic | Antes        | Después   | UI muestra              |
| ---- | ------------ | --------- | ----------------------- |
| 1    | anterior = 0 | count = 1 | Actual: 1 / Anterior: 0 |
| 2    | anterior = 1 | count = 2 | Actual: 2 / Anterior: 1 |
| 3    | anterior = 2 | count = 3 | Actual: 3 / Anterior: 2 |


*/
