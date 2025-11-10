import { useRef } from "react";

export default function FocoInput() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
    inputRef.current.value = "Texto añadido con useRef";
  };

  return (
    <div>
      <input
        ref={inputRef}
        placeholder="Escribe aquí..."
        autoComplete="off"
      />
      <button onClick={handleFocus}>
        Enfocar Input
      </button>
    </div>
  );
}


/*

1) useRef
useRef es un hook que crea un objeto contenedor
estable que React no cambia entre renders. Ese objeto tiene la forma:
{ current: <lo-que-guardes-aquí> }

A diferencia del estado (useState), modificar ref.current no provoca un re-render.

2) Crear la referencia
const inputRef = useRef(null);
Inicialmente current es null porque el <input> aún no está montado.
Tras el primer render, React conectará la ref con el nodo DOM del <input>
 y entonces inputRef.current pasará a ser el elemento real del DOM.

3) Vincular la ref al <input>
<input ref={inputRef} ... />
Esa prop ref le dice a React: “cuando montes este input,
guarda su nodo DOM en inputRef.current”.

4) Escribir el manejador que usa la ref
const handleFocus = () => {
  inputRef.current.focus();
  inputRef.current.value = "Texto añadido con useRef";
};

inputRef.current ahora apunta al nodo DOM del input.
Llamamos a .focus() para darle foco programáticamente.
Modificamos .value directamente (imperativo) para escribir
texto en el input sin re-render. Esto es válido porque estamos
operando sobre el DOM, no sobre el estado de React.
Nota: si quisieras que el valor mostrado dependiera del ciclo de React
(controlado), usarías useState y value/onChange.
Aquí lo hacemos “no controlado” a propósito, para demostrar useRef.

5) Disparar la acción desde el botón
<button onClick={handleFocus}>Enfocar Input</button>

Qué debes entender de useRef y .current

useRef devuelve un objeto mutable que persiste entre renders.
.current es donde guardas/lees el valor real que te interesa. En este caso, React coloca ahí el nodo DOM del input.
Cambiar inputRef.current no re-renderiza el componente (a diferencia de setState).
Por eso useRef es ideal para:
Acceder a elementos del DOM (focus, scroll, medir tamaños, reproducir audio, etc.).
Guardar valores “persistentes” que no deben disparar renders (temporizadores, ids, el “valor anterior”, contadores de renders, etc.).



 */