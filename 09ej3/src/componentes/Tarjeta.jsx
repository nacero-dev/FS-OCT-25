import React from "react";
import "./Tarjeta.css";

function Tarjeta({ children }) {
  return <div className="tarjeta">{children}</div>;
}

export default Tarjeta;

/*

function Tarjeta({ children }) { ... }
-Es un componente funcional.
-Recibe props. Aquí hacemos desestructuración y tomamos solo children.
-children es una prop especial que React rellena automáticamente con todo 
lo que coloques entre <Tarjeta> ... </Tarjeta> en App.jsx al usar el componente.


return <div className="tarjeta">{children}</div>;
Devuelve un <div> con clase tarjeta.
Dentro coloca exactamente el contenido que llegó como children.
El CSS de .tarjeta se aplica a este div.

App.jsx renderiza:
Crea <Contenedor> ... </Contenedor>.
Dentro de Contenedor, crea <Tarjeta> ... </Tarjeta>
con dos elementos hijos (<h3> y <p>).

React convierte eso, internamente, en algo equivalente a:
<Tarjeta children={[
  <h3>Contenido dentro de Tarjeta</h3>,
  <p>Este texto está pasado como children.</p>
]} />


*/