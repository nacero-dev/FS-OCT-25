import React from 'react';
import Counter from './diap7.jsx'; 

function App() {
  return (
    <div>
      <h1>Mi Contador</h1>
      <Counter /> {/* 👈 Aquí lo usas */}
    </div>
  );
}

export default App;




/*import './index.css';
import { useState } from 'react';

function App() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleEqual = () => {
    try {
      // Usa eval() solo para ejemplos simples. ¡No en apps reales sin sanitizar!
      setInput(String(eval(input).toFixed(12)));

    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="display">{input || '0'}</div>
      <div className="buttons">
        {[7, 8, 9, '/',
          4, 5, 6, '*',
          1, 2, 3, '-',
          0, 'C', '=', '+'].map((btn, idx) => (
          <button
            key={idx}
            onClick={() => {
              if (btn === 'C') handleClear();
              else if (btn === '=') handleEqual();
              else handleClick(String(btn));
            }}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App; */


