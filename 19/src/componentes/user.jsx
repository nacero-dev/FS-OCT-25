import { useParams } from "react-router-dom";

export default function User() {
  const { id } = useParams();
  return (
    <div>
      <h2>User Page</h2>
      <p>ID del usuario: {id}</p>
    </div>
  );
}
