import { useEffect } from "react";

const Alert = () => {

    const showAlert = () => {
      alert("Alerta mostrada al cargar el componente");
    };

  return (
    <>
      <button onClick={showAlert}>Mostrar Alerta</button>
    </>
  );
};

export default Alert;

/*comentarios 9:57*/