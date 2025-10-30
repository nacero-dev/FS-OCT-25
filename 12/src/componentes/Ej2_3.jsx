import React, { useState, useEffect } from "react";

const Ej2_3 = () => {
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const style = {
    color: size < 600 ? "red" : "green",
  };

  return (
    <div>
      <h2>Resize Component</h2>
      <p style={style}>Current window size: {size}px</p>
    </div>
  );
};

export default Ej2_3;
