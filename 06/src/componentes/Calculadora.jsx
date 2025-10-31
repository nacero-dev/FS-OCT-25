// src/componentes/Calculadora.jsx
import './Calculadora.css';
import { useState } from 'react';

function Calculadora() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleEqual = () => {
    try {
      setInput(String(eval(input).toFixed(12)));
    } catch {
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

export default Calculadora;
