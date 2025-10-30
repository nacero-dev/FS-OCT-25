import React, { useState } from "react";


function Ej1_3() {
  const [isRed, setIsRed] = useState(true);

  const toggleColor = () => {
    setIsRed(!isRed);
  };

  const buttonStyle = {
    backgroundColor: isRed ? "red" : "blue",
    color: "white",
    border: "none",
    padding: "0.8em 1.5em",
    borderRadius: "0.5em",
    cursor: "pointer",
  };

  return (
    <div className="ej1__3">
      <button style={buttonStyle} onClick={toggleColor}>
        Cambiar color ({isRed ? "Rojo" : "Azul"})
      </button>
    </div>
  );
}

export default Ej1_3;
