import { useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ClassroomCreate = () => {
  const form = useRef();
  const navigate = useNavigate();
  const { id } = useParams();
  const { VITE_API_URL } = import.meta.env;


  useEffect(() => {
    if (id) {
      fetch(`${import.meta.env.VITE_API_URL}/classrooms/${id}`)
        .then((response) => response.json())
        .then((data) => {
          form.current.name.value = data.name;
          form.current.teacher_id.value = data.teacher_id;
          form.current.students.value = data.students
            ? data.students.join(";")
            : "";
        });
    }
  }, [VITE_API_URL, id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newClassroom = {
      name: form.current.name.value,
      teacher_id: form.current.teacher_id.value,
      students: form.current.students.value
        ? form.current.students.value.split(";")
        : [],
    };

    let url = id
      ? `${import.meta.env.VITE_API_URL}/classrooms/${id}`
      : `${import.meta.env.VITE_API_URL}/classrooms`;
    let method = id ? "PUT" : "POST";

    fetch(url, {
      method: method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newClassroom),
    })
      .then(() => {
        navigate('/classrooms');
      })
      .catch(error => {
        console.error('Error al guardar el aula:', error);
        alert('No se pudo guardar el aula');
      });

  };

  return (
    <div>
      <h2>{id ? "Editar Aula" : "Crear Aula"}</h2>
      <form ref={form} onSubmit={handleSubmit}>
        <input name="name" type="text" placeholder="Nombre del Aula" /> <br />
        <input name="teacher_id" type="text" placeholder="ID del Profesor" /> <br />
        <textarea
          name="students"
          placeholder="Estudiantes separados por ';'"
          rows="3"
          cols="30"
        ></textarea>
        <br />
        <button type="submit">{id ? "Actualizar" : "Crear"}</button>
      </form>
    </div>
  );
};

export default ClassroomCreate;
