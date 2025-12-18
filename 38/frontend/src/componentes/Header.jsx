import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Header.css';

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className="header">
      <nav className="header__nav">
        <Link to="/" className="header__link">Home</Link>

        {user ? (
          <>
            <Link to="/create" className="header__link">Nuevo post</Link>
            <button className="header__button" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="header__link">Login</Link>
            <Link to="/register" className="header__link">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
