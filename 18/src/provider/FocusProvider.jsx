import { useRef } from "react";
import FocusContext from "../context/FocusContext";

export default function FocusProvider({ children }) {
  const inputRef = useRef(null);

  return (
    <FocusContext.Provider value={{ inputRef }}>
      {children}
    </FocusContext.Provider>
  );
}
