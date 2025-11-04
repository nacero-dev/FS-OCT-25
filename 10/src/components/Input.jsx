import { useState} from "react"

const Input = () => {
    const[value, setValue] = useState("")

    return (

        <>

            <span>Input Value: {value}</span>
            <input
                type ="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />

        </>


    )
}

export default Input

/*

Paso a paso: cómo funciona
1️⃣ const [value, setValue] = useState("")

value → guarda el texto actual del input.
Empieza vacío ("").

setValue → función para actualizar el estado cada vez que escribes algo nuevo.


2️⃣ El atributo value={value}

Hace que el input refleje siempre el valor del estado.
Si el estado cambia, el texto en el input también cambia.
Esto convierte al input en un campo controlado: su contenido depende del estado, no del DOM.

3️⃣ El evento onChange={(e) => setValue(e.target.value)}

Cada vez que escribes una tecla:
Se dispara el evento onChange.

React recibe el objeto del evento (e).
e.target es el elemento <input>.
e.target.value es el texto actual que tiene el input.
setValue(...) actualiza el estado con ese texto.

React vuelve a renderizar el componente → y {value} muestra el nuevo texto.


como detecta el escribir react?

🧩 1️⃣ El input en HTML puro (sin React)
En HTML clásico, cuando escribes dentro de un <input>, el navegador 
dispara un evento llamado "input" o "change" cada vez que el valor cambia.

<input type="text" id="miInput">

<script>
  const input = document.getElementById("miInput");

  input.addEventListener("input", (event) => {
    console.log(event.target.value); // imprime lo que escribes
  });
</script>

⚛️ 2️⃣ En React pasa lo mismo, pero React te simplifica el trabajo

React crea una versión propia de esos eventos del DOM llamada SyntheticEvent (evento sintético).
Esto permite que los eventos funcionen igual en todos los navegadores y se gestionen dentro del sistema de React.

Por eso puedes escribir directamente en JSX:
<input onChange={(e) => setValue(e.target.value)} />

onChange es la forma React de escuchar el evento "input" del navegador.
e es ese evento sintético de React.
e.target.value sigue siendo el texto actual del input.
setValue(...) actualiza el estado con ese texto.

Así, cada vez que escribes una letra:
El navegador dispara un evento input.
React lo detecta internamente y llama a la función que pusiste en onChange.
Esa función recibe e.
Tú lees e.target.value (el texto nuevo).
Llamas a setValue con ese texto.
React actualiza el estado → re-renderiza el componente → el <span> y el <input> muestran el nuevo valor.

Visualmente, así funciona el flujo:

(1) Usuario escribe → input detecta cambio
 ↓
(2) React ejecuta onChange
 ↓
(3) La función obtiene e.target.value
 ↓
(4) setValue(actualiza el estado)
 ↓
(5) React re-renderiza el componente
 ↓
(6) value={value} actualiza el input visible


🔍 4️⃣ Y por qué es tan importante value={value}

Este atributo conecta el estado con el input.
Si escribes algo, React actualiza el estado → el input refleja el valor nuevo.
Si tú cambias el estado manualmente (por ejemplo con un botón “Limpiar”), el input también se borra, porque su valor depende del estado.
Esa sincronización se llama “input controlado”.



*/