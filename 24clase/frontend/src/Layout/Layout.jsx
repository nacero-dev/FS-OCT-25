/* "##" 3. */

import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav style={{ marginBottom: "1em" }}>
        <Link to="/">Persons</Link> |{" "}
        <Link to="/classrooms">Classrooms</Link>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;

/*

Outlet es un “espacio dinámico” donde React Router renderiza el componente según la URL.
Así, tu Layout puede incluir menús, encabezados, etc. (aunque en tu caso está vacío).
--> PersonsList.jsx

*/