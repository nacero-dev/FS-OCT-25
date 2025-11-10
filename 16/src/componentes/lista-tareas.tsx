import { useState } from "react";

type Tarea = {
  id: number;
  texto: string;
  completada: boolean;
};

function ListaTareas() {
  const [tareas] = useState<Tarea[]>([
    { id: 1, texto: "Practicar TypeScript", completada: false },
    { id: 2, texto: "Repasar React", completada: true },
  ]);

  return (
    <ul>
      {tareas.map((t: Tarea) => (
        <li key={t.id}>
          {t.texto} – {t.completada ? "Completada" : "Pendiente"}
        </li>
      ))}
    </ul>
  );
}

export default ListaTareas;

