import { useEffect, useState } from "react";

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const RandyColor = () => {
  const [color, setColor] = useState(getRandomColor());

  useEffect(() => {
    const interval = setInterval(() => {
      setColor(getRandomColor());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h3>Ej 2-4</h3>
      <div
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: color,
          border: "1px solid #000",
        }}
      ></div>
      <p>Color actual: {color}</p>
    </>
  );
};

export default RandyColor;
