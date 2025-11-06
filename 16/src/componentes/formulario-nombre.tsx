import { useState } from "react";

const FormularioNombre = () => {
  const [nombre, setNombre] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNombre(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Nombre enviado:", nombre);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={nombre} onChange={handleChange} />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default FormularioNombre;
