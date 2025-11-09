import { useState, useEffect } from "react";

const Key = () => {
  const [key, setKey] = useState("");

  useEffect(() => {
    const handleKeyDown = (e) => {
      setKey(e.key);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <h3>Ej 3-2</h3>
      <p>Código de la tecla: {key}</p>
    </>
  );
};

export default Key;


/*
2) Estado inicial

key es una propiedad especial de React

const [key, setKey] = useState("");
-key → almacena el nombre de la última tecla presionada.
-Comienza como string vacío.
-Cada vez que el usuario presiona una tecla, el estado se actualiza.

Ejemplo:
Si presionas A, setKey("a") → key se vuelve "a".


3) useEffect con dependencias vacías
useEffect(() => {
  ...
}, []);
Esto significa:

Ejecuta el efecto solo una vez, cuando el componente se monta.
Y también deja lista una función de limpieza (cuando se desmonta).



4) Listener del teclado

Dentro del useEffect:

const handleKeyDown = (e) => {
  setKey(e.key);
};

window.addEventListener("keydown", handleKeyDown);


Explicación:

window escucha todo el teclado.
El Evento "keydown" ocurre cuando una tecla se PRESIONA, es un evento de React, JS, etc
React llama a handleKeyDown(e).
e.key contiene el nombre de la tecla:
"a"
"Enter"
" "
"ArrowUp"
"9"
etc.

Luego actualizas el estado:
setKey(e.key)
Esto causa un re-render y la UI se actualiza mostrando la última tecla.

5) Limpieza del listener
return () => {
  window.removeEventListener("keydown", handleKeyDown);
};

Esto es indispensable.
Cuando el componente desaparece:
el listener se elimina,
no sigue escuchando teclas “por detrás”,
evitas fugas de memoria.

7) Flujo completo

1. Monta el componente.
2. useEffect agrega el listener global de teclado.
3. El usuario presiona una tecla.
4. handleKeyDown recibe el evento → e.key.
5. Se ejecuta setKey(e.key).
6. React re-renderiza → se muestra la nueva tecla.

Si el componente se desmonta:

useEffect limpia el listener.



*/