import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ClassroomDetail = () => {
  const { id } = useParams();
  const [classroom, setClassroom] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/classrooms/${id}`)
      .then((response) => response.json())
      .then((data) => setClassroom(data))
      .catch((error) => {
        console.error("Error fetching classroom:", error);
        setError(error);
      });
  }, []);

  if (error) {
    return <p>Error fetching classroom: {error.message}</p>;
  }

  return (
    <div>
      <h2>Classroom Detail</h2>
      {!classroom ? (
        <p>No classroom found.</p>
      ) : (
        <ul>
          <li>
            <strong>Name:</strong> {classroom.name}
          </li>
          <li>
            <strong>Teacher ID:</strong> {classroom.teacher_id}
          </li>
          <li>
            <strong>Students:</strong>{" "}
            {classroom.students && classroom.students.length > 0
              ? classroom.students.join(", ")
              : "No students"}
          </li>
        </ul>
      )}
    </div>
  );
};

export default ClassroomDetail;
