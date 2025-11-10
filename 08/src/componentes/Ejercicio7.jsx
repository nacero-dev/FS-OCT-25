import { useState } from "react";
import "./Ejercicio7.css";

// Array afuera, como pediste
const tareasIniciales = [
  { id: 1, texto: "Hacer ejercicio" },
  { id: 2, texto: "Leer un libro" },
  { id: 3, texto: "Aprender React" },
];

const Ejercicio7 = () => {
  // useState solo recibe el array externo
  const [tareas, setTareas] = useState(tareasIniciales);

  const eliminarTarea = (id) => {
    setTareas((prev) => prev.filter((tarea) => tarea.id !== id));
  };

  return (
    <div className="ej7">
      <h3>Lista de tareas</h3>

      <ul>
        {tareas.map((tarea) => (
          <li key={tarea.id}>
            {tarea.texto}
            <button onClick={() => eliminarTarea(tarea.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ejercicio7;


/*Explicación paso a paso

const tareasIniciales = [...]

1) El array original se define FUERA del componente

const [tareas, setTareas] = useState([...]);
Guarda la lista completa de tareas.
Cuando se elimina una, el estado se actualiza y React re-renderiza la lista.

2) React crea el estado de la lista con ese array

Aquí ocurre algo importante:
tareas = lista actual que ve React en todo momento
setTareas = función para actualizar la lista
useState(tareasIniciales) copia los datos iniciales al estado

Desde este momento, React controla la lista, no el array original.


el array se defiene en useState debido a que : 

2.1) Para que la UI cambie, React NECESITA un estado

Si quieres que una tarea desaparezca de la pantalla, necesitas que React:
detecte el cambio
actualice la pantalla
vuelva a ejecutar el .map()
Y eso solo ocurre cuando usas un estado:
const [tareas, setTareas] = useState(tareasIniciales);

2.2) useState copia el array inicial y lo convierte en “reactivo”
useState(tareasIniciales)

hace dos cosas:
A) Toma el array externo → lo pone dentro del estado
B) Marca ese nuevo array como “reactivo”
Después de esto:
tareasIniciales = NO reactivo
tareas = SÍ reactivo (lo controla React)

React solo vuelve a renderizar cuando usas setTareas
setTareas(prev => prev.filter(...))
Actualiza el estado
Vuelve a ejecutar el componente
Vuelve a dibujar la lista sin la tarea eliminada


3) El componente imprime la lista usando .map()
tareas.map((tarea) => (
  <TareaItem key={tarea.id} id={tarea.id} texto={tarea.texto} onEliminar={eliminarTarea}/>
))

En este paso:

React recorre la lista tareas
Genera un componente <TareaItem /> por cada objeto
Le pasa al hijo:
id (para saber cuál eliminar)
texto (lo que se muestra)
onEliminar (la función del padre)
Cada tarea se transforma en un componente hijo.

4) El componente hijo muestra una sola tarea
<li>
  {texto}
  <button onClick={() => onEliminar(id)}>Eliminar</button>
</li>

En este punto:
El hijo solo muestra la tarea
No tiene estado propio
No modifica nada directamente
Solo ejecuta una función del padre cuando se hace clic

5) El usuario hace clic en “Eliminar”
<button onClick={() => onEliminar(id)}>
Cuando ocurre el clic:
Se llama a onEliminar(id)
El id corresponde exactamente a esa tarea
Ejemplo: clic en “Leer un libro” → se pasa id = 2

6) El componente padre recibe el id a eliminar
La función definida en el padre:
const eliminarTarea = (id) => {
  setTareas((prev) => prev.filter((tarea) => tarea.id !== id));
};
En este paso:
prev es la lista actual
.filter() crea una nueva lista sin la tarea con ese id
setTareas(...) actualiza el estado

explicacion 
tarea.id !== id
Es una comparación lógica que se usa dentro del .filter().

1) ¿Qué representa cada lado?
Izquierda: tarea.id → el id de la tarea actual que está recorriendo el .filter().
Ejemplo durante una iteración:
{ id: 2, texto: "Leer un libro" }
Entonces:
tarea.id === 2
Derecha:
id → el id que queremos eliminar, el que viene de la función:
eliminarTarea(id)
Si hiciste clic en la tarea 2:
id === 2

¿Qué hace !==?
El operador !== significa “estrictamente distinto”.
Traducción literal:

“¿El id de esta tarea es diferente al id que quiero eliminar?”


Cómo funciona dentro de .filter()
tareas.filter((tarea) => tarea.id !== id)
.filter() evalúa la condición para cada tarea del array.
Solo las tareas donde la expresión sea true se quedan en la nueva lista.

4) Ejemplo paso a paso

Supón esta lista:

1 Hacer ejercicio
2 Leer un libro
3 Aprender React


Y haces clic en la tarea con id 2.
La función recibe:
id = 2


Luego .filter() evalúa cada elemento así:

✅ Iteración 1

tarea.id = 1
id = 2
Comparación:

1 !== 2   →   true


✅ Se queda en la lista.

❌ Iteración 2

tarea.id = 2
id = 2
Comparación:

2 !== 2   →   false


❌ Se elimina (no pasa al nuevo array).

✅ Iteración 3

tarea.id = 3
id = 2
Comparación:

3 !== 2   →   true


✅ Se queda.

✅ 5) Resultado final del filtro

Después de filtrar:

[
  { id: 1, texto: "Hacer ejercicio" },
  { id: 3, texto: "Aprender React" }
]


La tarea con id 2 desaparece.
*/