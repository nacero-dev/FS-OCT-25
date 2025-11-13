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

/*

1) componentes/home.jsx
export default function Home() {
  return <h2>Home Page</h2>;
}


Componente funcional muy simple.

Cuando la URL coincide con /, el router renderiza Home dentro del <Outlet /> del layout.

2) componentes/about.jsx
export default function About() {
  return <h2>About Page</h2>;
}


Otro componente funcional.

Se muestra cuando la URL es /about.

3) componentes/user.jsx
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


useParams() lee los parámetros dinámicos de la ruta actual.

En tu router definiste /user/:id. El :id es un “placeholder”.

Si visitas /user/1, useParams() devuelve { id: "1" } y lo muestras en pantalla.

*/