import { Outlet, NavLink } from "react-router-dom";

export default function App() {
  return (
    <div>
      <nav>
        <ul className="nav-list">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/user/1">User</NavLink></li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}
