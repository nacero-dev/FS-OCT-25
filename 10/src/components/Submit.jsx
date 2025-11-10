import { useState } from "react";

const Submit = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue(e.target[0].value);
  };

  return (
    <>
      <h3>Ej 3-1</h3>
      <p>Valor ingresado: {inputValue}</p>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Escribe algo..." />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
};

export default Submit;



/*

1) Objetivo del ejercicio

Ejercicio Nivel 3:

“Crea un formulario con un input y un botón que muestre el valor ingresado al enviarlo.”

En pocas palabras:

- Escribes algo
- Haces submit
- Se muestra el texto debajo

Este ejercicio es para entender:

- cómo funcionan formularios en React,
- cómo controlar los eventos,
- y cómo manipular el estado con inputs.

 2) Estado inicial
const [inputValue, setInputValue] = useState("");

inputValue → muestra el valor que fue enviado.
Comienza como cadena vacía.
Cuando haces submit, se actualizará con lo que escribiste en el input.

3) Evento onSubmit
<form onSubmit={handleSubmit}>
Esto significa:
Cuando presionas el botón “Enviar”
O cuando presionas Enter dentro del input
→ se ejecuta handleSubmit.

4) La función handleSubmit
const handleSubmit = (e) => {
  e.preventDefault();
  setInputValue(e.target[0].value);
};


Vamos línea por línea.

A) e.preventDefault()
Evita que el navegador recargue la página.
En HTML normal, un <form> hace un refresh al enviar.
En React, esto destruiría el estado, así que lo evitamos siempre.

B) e.target[0].value
e.target es el formulario.
e.target[0] es el primer elemento del form, o sea el <input>.
.value es el contenido escrito.


Si el usuario escribe:

Hola React
entonces:
e.target[0].value === "Hola React"

C) Actualizamos el estado
setInputValue(e.target[0].value);

Esto:
guarda el valor enviado en el estado,
React re-renderiza,
y {inputValue} se actualiza en pantalla.

Flujo completo del componente:

1. El usuario escribe algo en el input.
2. El usuario hace click en “Enviar”.
3. El <form> lanza onSubmit.
4. handleSubmit:
-evita el refresh,
-toma el valor del input,
-lo guarda en el estado con setInputValue.
5.React re-renderiza.
6. El texto enviado aparece debajo del título.

✅ Idea clave

e.target es el formulario completo,
y los elementos dentro del formulario (input, button, etc.)
aparecen como si fueran posiciones de un array:

e.target[0] → primer elemento del formulario (input)
e.target[1] → segundo elemento (botón)


Y como el input contiene el texto que el usuario escribió,
entonces:

e.target[0].value → el texto que el usuario ingresó


Luego tú lo guardas en el estado:

setInputValue(e.target[0].value)


✅ Pero no es que “los inputs traigan arrays”

Esto es importante:

✅ Los inputs NO son arrays.
✅ El formulario NO es un array.
✅ React tampoco convierte nada en array.

Lo que pasa es:
Para el evento submit,
e.target es el formulario <form>,
y el DOM del navegador permite acceder a los elementos internos como si fueran índices:

form[0]  → input
form[1]  → button

entonces, ¿cómo fluye el texto?
1) El usuario escribe en el input

El navegador guarda internamente:

input.value = "lo que escribió"

2) Se hace submit

React ejecuta handleSubmit(e).

3) El formulario (e.target) contiene sus elementos:
e.target[0] → input
e.target[1] → button

4) Sacas el valor del input:
e.target[0].value

5) Lo guardas en el estado:
setInputValue(e.target[0].value)

6) React re-renderiza

y ahora puedes mostrar:

<p>Valor ingresado: {inputValue}</p>

✅ Visualización para que te quede cristalino
<form>                    ← e.target
│
├─ input type="text"      ← e.target[0]
│       └── value="Hola"  ← e.target[0].value
│
└─ button type="submit"   ← e.target[1]


Cuando haces submit,
tú simplemente lees el .value del input.

*/