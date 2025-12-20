import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav style={{ textAlign: "center", marginBottom: "2vh" }}>
        <Link to="/persons" style={{ marginRight: "2vw" }}>
          Personas
        </Link>
        <Link to="/classrooms">Aulas</Link>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
