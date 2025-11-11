import { useState, useRef, useEffect } from "react";
import RenderCountContext from "../context/RenderCountContext";

export default function RenderCountProvider({ children }) {
  const [count, setCount] = useState(0);
  const renders = useRef(1);

  useEffect(() => {
    renders.current += 1;
  });

  return (
    <RenderCountContext.Provider value={{ count, setCount, renders }}>
      {children}
    </RenderCountContext.Provider>
  );
}
