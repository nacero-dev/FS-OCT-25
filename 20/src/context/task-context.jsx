import { createContext } from "react";

const TaskContext = createContext();

export default TaskContext;

/* Estado Global useContext @ */

/* 

Se encarga de almacenar y manipular todas las tareas y esta compuesto por:
task-context.jsx
-solo define el contexto con createContext()
-no tiene logica, es la caja vacia donde vivirá el estado

*/