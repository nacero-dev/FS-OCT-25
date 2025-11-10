import { useState } from "react";

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const RandyBox = () => {
  const [bgColor, setBgColor] = useState("lightblue");

  const changeColor = () => {
    setBgColor(getRandomColor());
  };

  return (
    <>
      <h3>Ej 3-2</h3>
      <div
        onMouseOver={changeColor}
        style={{
          backgroundColor: bgColor,
          width: "200px",
          height: "200px",
          border: "1px solid blue",
          borderRadius: "5px",
          padding: "10px",
          boxSizing: "border-box",
        }}
      ></div>
    </>
  );
};

export default RandyBox;

/* se deja pendiente de profundizar, si hay tiempo se verá*/