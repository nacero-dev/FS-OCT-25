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

/*

El componente se renderiza.
Aparece un botón.
El usuario hace clic.
React dispara showAlert.
Aparece un alert() del navegador.

*/
