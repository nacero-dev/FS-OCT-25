import React from "react";

function Ej2_2() {
  const baseStyle = {
    color: "white",
    border: "none",
    padding: "1em 2em",
    borderRadius: "0.5em",
    cursor: "pointer",
  };

  const successStyle = {
    backgroundColor: "green",
  };

  const dangerStyle = {
    backgroundColor: "red",
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "1em", marginBottom: "2vh" }}>
      <button style={{ ...baseStyle, ...successStyle }}>Aceptar</button>
      <button style={{ ...baseStyle, ...dangerStyle }}>Cancelar</button>
    </div>
  );
}

export default Ej2_2;
