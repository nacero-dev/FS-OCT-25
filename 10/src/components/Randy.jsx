import { useEffect, useState } from "react";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

const Randy = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setNumber((prev) => prev + getRandomInt(1, 10));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h3>Ej 2-3</h3>
      <p>Número aleatorio: {number}</p>
    </>
  );
};

export default Randy;
