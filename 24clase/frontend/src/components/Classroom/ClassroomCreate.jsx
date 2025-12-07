import { useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ClassroomCreate = () => {
  const form = useRef();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3000/classrooms/${id}`)
        .then((response) => response.json())
        .then((data) => {
          form.current.name.value = data.name;
          form.current.teacher_id.value = data.teacher_id;
          form.current.students.value = data.students
            ? data.students.join(";")
            : "";
        });
    }
  }, []);

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
      ? `http://localhost:3000/classrooms/${id}`
      : "http://localhost:3000/classrooms";
    let method = id ? "PUT" : "POST";

    fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newClassroom),
    }).then(() => {
      navigate("/classrooms");
    });
  };

  return (
    <div>
      <h2>{id ? "Edit Classroom" : "Create Classroom"}</h2>
      <form ref={form} onSubmit={handleSubmit}>
        <input name="name" type="text" placeholder="Name" /> <br />
        <input name="teacher_id" type="text" placeholder="Teacher ID" /> <br />
        <textarea
          name="students"
          placeholder="Students separated by ';'"
          rows="3"
          cols="30"
        ></textarea>
        <br />
        <button type="submit">{id ? "Update" : "Create"}</button>
      </form>
    </div>
  );
};

export default ClassroomCreate;
