import { useState, useEffect } from "react";

const ClassroomsList = () => {
  const [classrooms, setClassrooms] = useState([]);
  const [error, setError] = useState(null);

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/classrooms/${id}`, {
      method: "DELETE",
    }).then(() => {
      setClassrooms(classrooms.filter((classroom) => classroom.id !== id));
    });
  };

  useEffect(() => {
    fetch("http://localhost:3000/classrooms")
      .then((response) => response.json())
      .then((data) => setClassrooms(data))
      .catch((error) => {
        console.error("Error fetching classrooms:", error);
        setError(error);
      });
  }, []);

  if (error) {
    return <p>Error fetching classrooms: {error.message}</p>;
  }

  return (
    <div>
      <h2>Classrooms List</h2>
      <a href="/classrooms/create">Create Classroom</a>
      {classrooms.length === 0 ? (
        <p>No classrooms found.</p>
      ) : (
        <ul>
          {classrooms.map((classroom) => (
            <li key={classroom.id}>
              {classroom.name} — Teacher ID: {classroom.teacher_id}
              <a href={`/classrooms/${classroom.id}`}> View</a>
              <a href={`/classrooms/create/${classroom.id}`}> Edit</a>
              <button onClick={() => handleDelete(classroom.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ClassroomsList;
