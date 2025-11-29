/* 
task-provider.jsx
contiene toda la logica del estado global
*/

import { useEffect, useState } from "react";
import TaskContext from "../context/task-context";

/* Local Storage "1" */
const STORAGE_KEY = "tasks"; 

/* Task Provider "2" */
const TaskProvider = ({ children }) => { 
  const [tasks, setTasks] = useState(() => { /* "3" guardado de tasks y coordinacion con LocalStorage*/
    try {
      const stored = localStorage.getItem(STORAGE_KEY); /* inicializa tareas desde localStorage "get item", si esta vacio arranca como [] */
      return stored ? JSON.parse(stored) : []; /* obtiene datos de localStorage "JSON.parse" si es que los hay */
    } catch (e) {
      console.error("Error leyendo localStorage", e);
      return [];
    }
  });

  /*useEffect "4"*/
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks)); /* Se usa para guardar las tareas en localStorage cuando cambian. */
    } catch (e) {
      console.error("Error guardando en localStorage", e);
    }
  }, [tasks]); 

  
  /*funciones globales*/

  /* addTask "5" */
  const addTask = (title, description) => { /*5.1*/
    const newTask = {
      id: Date.now().toString(), /*5.2*/
      title,
      description,
      completed: false /*se establece en false inicialmente*/
    };
    setTasks((prev) => [...prev, newTask]); /*5.3*/
  };


  /*6*/
  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));  /*6.1*/
  };

  const toggleTaskCompleted = (id) => { /*poner como completada la tarea*/
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task /* @ */
      )
    );
  };

  const getTaskById = (id) => {
    return tasks.find((task) => task.id === id);
  };

  return (

    /*2*/
    <TaskContext.Provider
      value={{ tasks, addTask, deleteTask, toggleTaskCompleted, getTaskById }}
    >
      {children}
    </TaskContext.Provider>
  );
};


export default TaskProvider;

/* 

1.
 se define una "KEY" para identificar donde se guardarán las tareas, que esté en una constante evita duplicación
 y errores, si se quiere cambiar la claver se hace aqui
 tasks contiene el array actual de tareas (estado), setTasks es la función que actualiza ese array 
 React vuelve a renderizar cada vez que setTasks cambia algo 
 el estado vive en el primer elemento del useState. 
 localStorage  → (inicializa) →  tasks (useState)
 tasks (cambia) → (sync) → localStorage 
 Dónde viven las tareas realmente? En tasks, el PRIMER elemento de useState.
 Para qué existe localStorage? Para que cuando recargues, tasks no vuelva a estar vacío.
 React usa localStorage como estado? React solo usa tasks, el estado del provider. 

2.

Este componente envuelve toda la aplicación, asi todos los componentes hijos tienen acceso al contexto,
sin necesidad de props.

En App.jsx se usa así:
<TaskProvider>
  <RouterProvider router={router} />
</TaskProvider>

Esto significa que cada componente que se renderiza dentro de las rutas tendrá acceso a:
tasks
addTask
deleteTask
toggleTaskCompleted
getTaskById

2.1 Ruta / (Home.jsx)
Aquí se usa el estado global para:
Mostrar el listado de tareas → usa tasks
Completar tareas → usa toggleTaskCompleted()
Eliminar tareas → usa deleteTask()
Filtrar tareas → usa useState local, pero basado en tasks
- Sí usa el estado global.

2.2 Ruta /new-task (NewTask.jsx)
Aquí se usa el estado global para:
Agregar una nueva tarea → usa addTask()
- El formulario usa useRef, pero el guardado final se hace en tasks
- Sí usa el estado global.

2.3 Ruta /task/:id (TaskDetail.jsx)
Aquí se usa el estado global para:
Obtener una tarea por id → usa getTaskById(id)
Mostrar los datos precisos de esa tarea → desde tasks
Eliminar desde el detalle → usa deleteTask()
Marcar como completada → usa toggleTaskCompleted()
- Sí usa el estado global.


3.

¿Qué hace esto?
Cuando el provider se monta, intenta leer tareas desde localStorage.
Si existen → las carga.
Si no existen → arranca con un array vacío.
Si ocurre un error → previene ruptura del programa.
✔ ¿Por qué se usa una función dentro de useState "useState(() => {..});"?
Porque así solo se ejecuta una vez, en el primer render.
Es un patrón recomendado para inicializaciones costosas.

Punto clave: ¿Dónde se guardan realmente las tareas?
Las tareas se guardan en tasks, que es el primer valor de useState.

!!! No existe contradicción entre “las tareas se guardan en tasks” y “se leen desde localStorage”.
Lo más importante: React NO usa localStorage como estado
React solo usa:
const [tasks, setTasks] = useState(...)
localStorage es solo un lugar donde se guarda una copia.
!!! Entonces… ¿por qué leo localStorage al inicio?
Cuando la app se abre por primera vez
React necesita saber: “¿Tengo tareas previas guardadas?”
Entonces: 
1.React mira localStorage una única vez
2.Toma ese valor (si existe) y lo usa como valor inicial de tasks.
- Después de eso, React NO vuelve a leer localStorage.
- El único estado válido es tasks.

IMPORTANTE!!!

localStorage solo sirve para inicializar tasks.
Una vez inicializado el estado, React ignora localStorage.
Todos los componentes leen únicamente “tasks”.

¿Entonces cuándo se escribe en localStorage?
Cada vez que tasks cambia, el Provider actualiza la copia en localStorage:
Esto significa:
tasks → cambia → localStorage se actualiza

en resumen:
React usa tasks
localStorage es solo respaldo

4.

¿Qué hace esto?

-Cada vez que tasks cambia… Se ejecuta este useEffect.
-Y guarda la nueva lista de tareas en localStorage, asi si el usuario recarga la página, las tareas no se pierden.

5.

5.1
se reciben parametros de new-task.jsx, el link es addTask(title, description
5.2
esta es una funcion de JS devuelve un numero desde 1/1/1970, se convierte a string por que los parametreos de URL son strings, y useParams devuelve strings
5.3
(prev)
prev significa el estado anterior
lo que ya estaba en tasks.
Ejemplo:
prev = [
  { id: "1", title: "Dormir" }
]
5.3.1
¿Qué es [...prev, newTask]?
Ejemplo:
newTask = { id: "2", title: "Estudiar" }
Expansión:
[ ...prev, newTask ]  =
[
   { id: "1", title: "Dormir" },
   { id: "2", title: "Estudiar" }
]

¿Por qué no hacemos prev.push(newTask)?
Porque push modifica el array original, y React necesita inmutabilidad.
React detecta cambios así:
El array anterior === EL array nuevo ?   → falso  
React vuelve a renderizar

6.1
filter() devuelve un nuevo array con solo los elementos que cumplan la condición.


*/

