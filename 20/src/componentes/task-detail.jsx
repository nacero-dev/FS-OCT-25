import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TaskContext from "../context/task-context";

const TaskDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getTaskById, toggleTaskCompleted, deleteTask } =
    useContext(TaskContext);

  const task = getTaskById(id);

  if (!task) {
    return (
      <div className="bg-white border rounded p-4 max-w-md mx-auto text-center">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          Tarea no encontrada
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          La tarea solicitada no existe o fue eliminada.
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-blue-500 text-white text-sm px-3 py-2 rounded"
        >
          Volver al listado
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white border rounded p-4 max-w-md mx-auto">
      <h1 className="text-lg font-semibold text-gray-800 mb-3">
        Detalle de tarea
      </h1>
      <h2 className="text-md font-medium text-gray-800 mb-1">{task.title}</h2>
      <p className="text-sm text-gray-700 mb-3">{task.description}</p>
      <p className="text-sm mb-4">
        Estado:
        <span
          className={`ml-2 px-2 py-1 rounded text-xs ${task.completed
              ? "bg-green-100 text-green-700"
              : "bg-yellow-100 text-yellow-700"
            }`}
        >
          {task.completed ? "Completada" : "Pendiente"}
        </span>
      </p>

      <div className="flex gap-2">
        <button
          onClick={() => {
            deleteTask(task.id);
            navigate("/");
          }}
          className="bg-red-500 text-white text-sm px-3 py-2 rounded"
        >
          Eliminar tarea
        </button>

        <button
          onClick={() => navigate("/")}
          className="border text-gray-700 text-sm px-3 py-2 rounded"
        >
          Volver
        </button>
      </div>
    </div>
  );
};

export default TaskDetail;
