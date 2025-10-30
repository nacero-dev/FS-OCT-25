import React from "react";

function Ej1_2() {
  const styles = {
    title: {
      color: "blue",
    },
    button: {
      backgroundColor: "green",
      color: "white",
      border: "none",
      padding: "0.8em 1.5em",
      borderRadius: "0.5em",
    },
  };

  return (
    <div className="ej1__2">
      <h1 style={styles.title}>Título Azul con Objeto</h1>
      <button style={styles.button}>Botón Verde con Objeto</button>
    </div>
  );
}

export default Ej1_2;
