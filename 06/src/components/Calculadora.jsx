// src/components/Calculadora.jsx
import React, { useState } from "react";

function Calculadora() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [resultado, setResultado] = useState(null);

  const operar = (operacion) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    if (isNaN(n1) || isNaN(n2)) {
      setResultado("Introduce números válidos");
      return;
    }
    switch (operacion) {
      case "+":
        setResultado(n1 + n2);
        break;
      case "-":
        setResultado(n1 - n2);
        break;
      case "*":
        setResultado(n1 * n2);
        break;
      case "/":
        setResultado(n2 !== 0 ? n1 / n2 : "No se puede dividir por 0");
        break;
      default:
        break;
    }
  };

  return (
    <div style={styles.calc}>
      <h3>Calculadora</h3>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Número 1"
        style={styles.input}
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Número 2"
        style={styles.input}
      />
      <div style={styles.buttons}>
        {["+", "-", "*", "/"].map((op) => (
          <button key={op} onClick={() => operar(op)} style={styles.button}>
            {op}
          </button>
        ))}
      </div>
      {resultado !== null && <p>Resultado: {resultado}</p>}
    </div>
  );
}

const styles = {
  calc: {
    backgroundColor: "magenta",
    padding: "1rem",
    borderRadius: "8px",
  },
  input: {
    margin: "0.5rem",
    padding: "0.5rem",
    width: "6rem",
  },
  buttons: {
    marginTop: "0.5rem",
  },
  button: {
    margin: "0.3rem",
    padding: "0.5rem 1rem",
    cursor: "pointer",
  },
};

export default Calculadora;
