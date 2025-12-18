import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
      <Link to="/">Home</Link>{' '}

      {user ? (
        <>
          <Link to="/create">Nuevo post</Link>{' '}
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>{' '}
          <Link to="/register">Register</Link>
        </>
      )}
    </header>
  );
};

export default Header;
