import { useState, useRef, useEffect } from "react";
import PreviousCounterContext from "../context/PreviousCounterContext";

export default function PreviousCounterProvider({ children }) {
  const [count, setCount] = useState(0);
  const previous = useRef(0);

  useEffect(() => {
    previous.current = count;
  }, [count]);

  return (
    <PreviousCounterContext.Provider value={{ count, setCount, previous }}>
      {children}
    </PreviousCounterContext.Provider>
  );
}
