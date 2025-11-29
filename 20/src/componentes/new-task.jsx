import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import TaskContext from "../context/task-context";

const NewTask = () => {
  const { addTask } = useContext(TaskContext); /*1 */
  const navigate = useNavigate();

  const titleRef = useRef(null); /*2*/
  const descriptionRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const title = titleRef.current.value.trim(); /*tomar valores del input de los usuarios "title"*/
    const description = descriptionRef.current.value.trim(); /*tomar valores del input de los usuarios "description"*/

    if (!title) {
      // simple validación mínima
      alert("El título es obligatorio");
      return;
    }

    addTask(title, description); /* 3 */

    // limpiar campos
    titleRef.current.value = "";
    descriptionRef.current.value = "";

    // volver al listado
    navigate("/");
  };

  return (
    <div className="bg-white border rounded p-4 max-w-md mx-auto">
      <h1 className="text-lg font-semibold text-gray-800 mb-4">
        Nueva tarea
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        {/* Campo título */}
        <label htmlFor="title" className="text-sm font-medium text-gray-700">
          Título:
        </label>
        <input
          id="title"
          type="text"
          ref={titleRef}
          className="border rounded p-2 text-sm text-gray-800"
        />

        {/* Campo descripción */}
        <label
          htmlFor="description"
          className="text-sm font-medium text-gray-700"
        >
          Descripción:
        </label>
        <textarea
          id="description"
          ref={descriptionRef}
          className="border rounded p-2 text-sm text-gray-800 min-h-[80px]"
        />

        {/* Botón */}
        <button
          type="submit"
          className="bg-blue-500 text-white text-sm px-3 py-2 rounded mt-2"
        >
          Agregar tarea
        </button>
      </form>
    </div>
  );
};

/*En React, se usa en formularios no controlados para obtener el valor actual del input sin depender del estado del componente. */

/*
Al enviar el formulario:
obtiene valores desde los refs ( ref={titleRef} y ref={descriptionRef} )
llama a addTask() del contexto (task-provider.jsx)
limpia inputs
navega a /
*/

export default NewTask;


/*

1.

lo trae desde task-provider, esto significa "Quiero acceder al estado global
y a las funciones que me ofrece TaskProvider”

¿Por qué no usamos props?
Porque este proyecto está diseñado para evitar "prop drilling”, que es pasar props así:
App → Layout → Home → Form → Componente → addTask

Con Context API:
TaskProvider → (contexto global) → cualquier componente que lo necesite

Con una sola línea:
useContext(TaskContext)

cómo se conecta EXACTAMENTE con el TaskProvider

Paso 1: El Provider envuelve toda la app (en App.jsx)

<TaskProvider>
  <RouterProvider router={router} />
</TaskProvider>

Todo lo que está dentro de RouterProvider puede acceder al contexto es decir dentro
de lo que esta en const router = createBrowserRouter([ ]);

Incluye:
Home.jsx
NewTask.jsx
TaskDetail.jsx
Etc.

Paso 2: El Provider expone funciones y estado global
En task-provider.jsx:

<TaskContext.Provider
  value={{
    tasks,
    addTask,
    deleteTask,
    toggleTaskCompleted,
    getTaskById
  }}
>
  {children}
</TaskContext.Provider>

Esto hace que todos esos valores estén disponibles para toda la app:

tasks
addTask
deleteTask
toggleTaskCompleted
getTaskById

Paso 3: NewTask.jsx obtiene SOLO lo que necesita

const { addTask } = useContext(TaskContext);
Esto hace que addTask sea una función disponible globalmente, sin recibir props.

Hace que el componente quede conectado al TaskContext
y por lo tanto al TaskProvider.

Analogia, "Es como un enchufe":
TaskProvider = enchufe que da electricidad (estado global)
NewTask = aparato
useContext(TaskContext) = cable que conecta el aparato al enchufe


2.
2.1 ¿Qué ES useRef?
useRef es un hook de React que sirve para:
Guardar un valor que NO causa re-render
Apuntar a elementos del DOM (inputs, divs, etc.) es como un "marcador" o "puntero".

2.2 const titleRef = useRef(null);
Lo que hace es:
Crear un objeto así:
titleRef = {
   current: null
}
Esto será el contenedor que luego apuntará al input.

2.3 ¿Qué pasa cuando hacemos <input ref={titleRef}>?

Aquí ocurre la magia de useRef.
<input id="title" type="text" ref={titleRef} />

Cuando React renderiza el input:

React le asigna el nodo DOM real:
titleRef.current = (input HTML)

Es decir, después de renderizar:
titleRef = {
   current: <input id="title" ... >  ← el input real del DOM
}

No es un string
No es un valor del input
Es el nodo DOM entero

2.4 ¿Qué es titleRef.current?

Es el input completo en el DOM.
titleRef.current = <input id="title" type="text" value="Comprar pan">

2.5 ¿Qué es titleRef.current.value?
value es la propiedad HTML del input, NO un estado de React.
Si el usuario escribe:
Comprar manzanas
Entonces:
titleRef.current.value === "Comprar manzanas"

2.6 ¿Qué es .trim()?
Elimina espacios al inicio y al final.
"   hola  ".trim() → "hola"

2.7 Flujo completo:

PASO 1 — Se declaran los refs
const titleRef = useRef(null);
const descriptionRef = useRef(null);

React crea:
titleRef = { current: null }
descriptionRef = { current: null }

PASO 2 — Se conectan a los inputs
<input ref={titleRef} />
<textarea ref={descriptionRef} />

React los rellena con los elementos HTML:
titleRef.current = <input ... >
descriptionRef.current = <textarea ... >


➡ React los rellena con los elementos HTML:
titleRef.current = <input ... >
descriptionRef.current = <textarea ... >

PASO 3 — El usuario escribe texto
Supongamos que escribe:

Título: "Comprar pan"
Descripción: "En la panadería"


En ese momento:
titleRef.current.value = "Comprar pan"
descriptionRef.current.value = "En la panadería"

PASO 4 — Enviar formulario
Cuando se ejecuta:
const title = titleRef.current.value.trim();
const description = descriptionRef.current.value.trim();
Se obtiene:
title = "Comprar pan"
description = "En la panadería"
Ambos son strings normales.

PASO 5 — Llamas a la función global del context
addTask(title, description);
Esto envía los valores al TaskProvider.

PASO 6 — TaskProvider crea la nueva tarea
const newTask = {
  id: Date.now().toString(),
  title,           ← "Comprar pan"
  description,     ← "En la panadería"
  completed: false
};

Resultado:
{
  id: "1731883493420",
  title: "Comprar pan",
  description: "En la panadería",
  completed: false
}

PASO 7 — Se agrega al array global de tareas
setTasks(prev => [...prev, newTask])

Las tareas quedan así:
[
 { id: "1731883493420", title: "Comprar pan", ... }
]

PASO 8 — El useEffect guarda en localStorage
localStorage.setItem("tasks", JSON.stringify(tasks));

EN UNA SOLA ORACIÓN:
useRef permite leer el valor del input DIRECTAMENTE del DOM SIN usar useState.

DIAGRAMA ULTRA CLARO
<input ref={titleRef} />

titleRef.current  → apunta al input
titleRef.current.value → texto escrito
const title = titleRef.current.value → string con el texto
addTask(title) → envía el texto al context
TaskProvider → crea la nueva tarea
setTasks → actualiza el estado global
useEffect → guarda en localStorage





3. ¿Qué pasa en la práctica?

3.1 El usuario escribe una tarea
(title y description via useRef)

3.2 NewTask.jsx llama:
addTask(title, description)

3.3 TaskProvider recibe ese llamado:
setTasks((prev) => [...prev, newTask]);

3.4 Todo React se actualiza
Home.jsx muestra la nueva tarea.





*/












