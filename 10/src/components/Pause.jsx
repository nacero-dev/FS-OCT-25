import { useState, useEffect } from "react";

const Pause = () => {
  const [play, setPlay] = useState(false);
  const [count, setCount] = useState(0);

  const halder = () => {
    console.log(play);
    setPlay(true);
  };

  useEffect(() => {
    let timer = setInterval(() => {
      console.log(play);
      if (play) setCount((current) => current + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [play]);

  return (
    <button onClick={halder}>
      Count es {count}
    </button>
  );
};

export default Pause;


/* se deja para despues no esta completo*/