import { Outlet, Link, useNavigate } from 'react-router-dom';

const Layout = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/users/me`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }).then(response => {
        if (!response.ok) {
          localStorage.removeItem('token');
        }
      });
    }
  }, []);

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
                <button className="button_a" onClick={() => {
                  localStorage.removeItem('token');
                  setUser(null);
                  navigate('/login');
                }}>
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
