import { useState, useRef } from "react";

function ContadorRenders() {
  const [count, setCount] = useState(0);
  const renders = useRef(1);   // Inicializa el ref

  renders.current += 1;        // Aumenta el contador en cada render

  return (
    <div>
      <p>Contador: {count}</p>
      <p>Renders: {renders.current}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
}


/*
Paso a paso
Crear estado que sí provoca re-render
const [count, setCount] = useState(0);

2) Crear ref que NO provoca re-render
const renders = useRef(1);

3) Cada re-render ejecuta el código del cuerpo del componente
renders.current += 1;
aumenta automáticamente cada vez que React re-renderiza.

4) Mostrar los valores en pantalla
El re-render viene del setState, pero renders.current es solo un dato que React lee.



*/