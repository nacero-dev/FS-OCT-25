import { useState } from "react"

const List = () => {
    const [items, setItems] = useState([])
    return (
        <>

            <h2>Ej1-3</h2>

            <button onClick={() => setItems([...items, `Item ${items.length + 1}`])}> Agregar item</button>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}

            </ul>

        </>


    )

}

export default List




/*

const [items, setItems] = useState([]);

items → es el array donde guardaremos los elementos de la lista.
Empieza vacío ([]).

setItems → es la función para actualizar ese array.

<button onClick={() => setItems([...items, `Item ${items.length + 1}`])}> Agregar item</button>

onClick escucha el evento del clic.
En React, los eventos se escriben en camelCase 
(onClick, onChange, onSubmit, etc.) y se les pasa una función entre llaves.

{items.map((item, index) => (
    <li key={index}>{item}</li>
))}

Esto devuelve un nuevo array de elementos 

React luego renderiza (muestra) ese array dentro del <ul>.

El resultado visual en pantalla es:
• Item 1
• Item 2
• Item 3

🧩 ¿Y qué significa {item}?

Las llaves {} en JSX permiten insertar JavaScript dentro del HTML.

En este caso, item es una variable de tu array ("Item 1", "Item 2", etc.).
Así que {item} muestra su valor dentro del <li>.

Si item = "Item 2", entonces
<li>{item}</li>
se renderiza como
<li>Item 2</li>

| Concepto                     | Explicación                                                                                                           |
| :--------------------------- | :-------------------------------------------------------------------------------------------------------------------- |
| **`useState([])`**           | Crea un estado local (aquí, un array vacío) que puede crecer al agregar elementos.                                    |
| **Estado inmutable**         | No modificas el array con `.push()`. Usas el operador **spread `...`** para crear uno nuevo: `[...items, nuevoItem]`. |
| **Interpolación de cadenas** | `` `Item ${items.length + 1}` `` genera texto dinámico (Item 1, Item 2...).                                           |
| **Evento `onClick`**         | Ejecuta una función cada vez que haces clic en el botón.                                                              |
| **`.map()`**                 | Recorre el array `items` y devuelve un `<li>` por cada elemento.                                                      |
| **`key={index}`**            | Clave interna que ayuda a React a identificar y actualizar elementos en listas.                                       |
| **`{item}`**                 | Inserta el contenido del elemento dentro del JSX (el valor que guardaste).                                            |

🧱 Visualización del flujo

1️⃣ Estado inicial:
items = []

2️⃣ Clic 1:
setItems(["Item 1"])

3️⃣ Clic 2:
setItems(["Item 1", "Item 2"])

4️⃣ Clic 3:
setItems(["Item 1", "Item 2", "Item 3"])


Segunda vuelta de repaso:

Declaración del estado
const [items, setItems] = useState([]);
items → es un array que empieza vacío ([]).
setItems → cambia ese array.
Cada vez que cambies el array con setItems(...), React volverá a renderizar la lista.

Botón que agrega elementos
<button onClick={() => setItems([...items, `Item ${items.length + 1}`])}>
  Agregar item
</button>

✅ A) ¿Qué hace onClick?

Ejecuta la función cuando se hace clic.

✅ B) ¿Qué es [...items, nuevoItem]?

Es spread operator (...).

Sirve para copiar el array actual.

Nunca debemos modificar el estado directamente (no usar .push()).

Lo correcto es crear un array nuevo y asignarlo.

Ejemplo:

items = []            → clic
items = ["Item 1"]    → clic
items = ["Item 1", "Item 2"]


Esto lo logra:

[...items, nuevoItem]

✅ C) ¿Qué significa `Item ${items.length + 1}`?

Es un template string.
Toma el tamaño actual del array y suma 1.

Si hay 0 elementos → “Item 1”
Si hay 1 elemento → “Item 2”
Si hay 2 elementos → “Item 3”

Así generas textos automáticos.

✅ D) ¿Qué hace setItems(...)?

Actualiza el estado con la nueva lista.

Al cambiar el estado:

React vuelve a renderizar,

y se vuelve a dibujar la lista completa.


*/