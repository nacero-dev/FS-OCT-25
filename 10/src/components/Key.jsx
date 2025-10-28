import { useState, useEffect } from "react";

const Key = () => {
  const [key, setKey] = useState("");

  useEffect(() => {
    const handleKeyDown = (e) => {
      setKey(e.key);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <h3>Ej 3-2</h3>
      <p>Código de la tecla: {key}</p>
    </>
  );
};

export default Key;
