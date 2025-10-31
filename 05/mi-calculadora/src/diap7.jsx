import React, { useState } from 'react';

const Counter = () => {
  // Declaramos un estado 'count' y una función para actualizarlo 'setCount'
  const [count, setCount] = useState(0);

  // Función para incrementar el contador
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Contador: {count}</h1>
      <button onClick={increment}>Incrementar</button>
    </div>
  );
};

export default Counter;
