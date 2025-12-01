import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TaskContext from "../context/task-context";

const Home = () => {
  const { tasks, deleteTask, toggleTaskCompleted } = useContext(TaskContext);

  // Estado local propio de la página, basado en el contexto
  const [filter, setFilter] = useState("all"); // all | completed | pending
  const [visibleTasks, setVisibleTasks] = useState(tasks);

  useEffect(() => {
    applyFilter(filter, tasks);
  }, [tasks, filter]);

  const applyFilter = (selectedFilter, tasksToFilter) => {
    if (selectedFilter === "completed") {
      setVisibleTasks(tasksToFilter.filter((task) => task.completed));
    } else if (selectedFilter === "pending") {
      setVisibleTasks(tasksToFilter.filter((task) => !task.completed));
    } else {
      setVisibleTasks(tasksToFilter);
    }
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <div className="bg-white border rounded p-4">

      
      <h1 className="text-lg font-semibold mb-4 text-gray-800">
        Listado de tareas
        </h1>

       <div className="flex gap-2 mb-4">
        <button
          onClick={() => handleFilterChange("all")}
          disabled={filter === "all"}
          className={`px-3 py-1 text-sm border rounded ${
            filter === "all"
              ? "bg-blue-500 text-white"
              : "bg-white text-gray-700"
          }`}
        >
          Todas
        </button>
        <button
          onClick={() => handleFilterChange("completed")}
          disabled={filter === "completed"}
          className={`px-3 py-1 text-sm border rounded ${
            filter === "completed"
              ? "bg-blue-500 text-white"
              : "bg-white text-gray-700"
          }`}
        >
          Completadas
        </button>
        <button
          onClick={() => handleFilterChange("pending")}
          disabled={filter === "pending"}
          className={`px-3 py-1 text-sm border rounded ${
            filter === "pending"
              ? "bg-blue-500 text-white"
              : "bg-white text-gray-700"
          }`}
        >
          Pendientes
        </button>
      </div>



      {/* Lista de tareas */}     
      {visibleTasks.length === 0 ? (
        <p className="text-gray-600 text-sm">No hay tareas para mostrar.</p>
      ) : (
        <ul className="space-y-3">
          {visibleTasks.map((task) => (
            <li key={task.id}
            className="border rounded p-3 bg-gray-50 flex flex-col gap-2"
            >
              <div>
              <h3
                  className={`font-medium ${
                    task.completed ? "line-through text-gray-500" : ""
                  }`}
                >
                  <Link
                    to={`/task/${task.id}`}
                    className="text-blue-600 hover:underline"
                  >
                    {task.title}
                  </Link>
                </h3>
              <p className="text-sm text-gray-600">{task.description}</p>
                <p className="text-xs text-gray-500 mt-1">
                Estado:{" "}
                {task.completed ? " Completada" : " Pendiente"}
              </p>
              </div>

              <div className="flex gap-2 mt-2 sm:mt-0">
                <button
                  onClick={() => toggleTaskCompleted(task.id)}
                  className="text-xs px-2 py-1 border rounded bg-white"
                >
                  {task.completed
                    ? "Marcar como pendiente"
                    : "Marcar como completada"}
                </button>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="text-xs px-2 py-1 border rounded bg-white"
                >
                  Eliminar
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      <p className="mt-6">
        <Link to="/new-task" className="text-blue-600 hover:underline text-sm">
          Agregar nueva tarea
        </Link>
      </p>
    </div>
  );
};

export default Home;
