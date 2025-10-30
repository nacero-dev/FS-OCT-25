import React, { useState } from "react";

function Ej2_1() {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    backgroundColor: isHovered ? "orange" : "green",
    color: "white",
    border: "none",
    padding: "1em 2em",
    borderRadius: "0.5em",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  return (
    <div style={{ textAlign: "center", marginBottom: "2vh" }}>
      <button
        style={buttonStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Pasa el mouse
      </button>
    </div>
  );
}

export default Ej2_1;
