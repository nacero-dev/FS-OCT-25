import { Outlet, Link, useNavigate } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import { UserContext } from '../context/UserContext.jsx';

const Layout = () => {
  const navigate = useNavigate();
  const { user, logout, loading } = useContext(UserContext);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>

            {!user ? (
              <>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/login">Login</Link></li>
              </>
            ) : (
              <>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li>
                  <button
                    className="button-a"
                    onClick={() => {
                      logout();
                      navigate('/login');
                    }}
                  >
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </nav>
      </header>

      <Outlet />
    </>
  );
};

export default Layout;
