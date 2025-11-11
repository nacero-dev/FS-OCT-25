import { useContext } from "react";
import FocusContext from "../context/FocusContext";

export default function FocusInput() {
  const { inputRef } = useContext(FocusContext);

  return (
    <div>
      <input ref={inputRef} placeholder="Escribe aquí" />
      <button onClick={() => inputRef.current.focus()}>
        Enfocar input
      </button>
    </div>
  );
}
