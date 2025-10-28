import { useState } from "react";

const Submit = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue(e.target[0].value);
  };

  return (
    <>
      <h3>Ej 3-1</h3>
      <p>Valor ingresado: {inputValue}</p>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Escribe algo..." />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
};

export default Submit;
