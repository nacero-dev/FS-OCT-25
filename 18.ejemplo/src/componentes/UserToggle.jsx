import { useContext } from 'react';
import UserContext from '../context/userContext';

const UserToggle = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <button onClick={() => setUser(user === null ? "Luis" : null)}>
      {user === null ? "Login" : "Deslogear"}
    </button>
  );
};

export default UserToggle;
