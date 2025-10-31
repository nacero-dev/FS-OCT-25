// src/componentes/Footer.jsx
import './Footer.css';

function Footer({ message }) {
  return (
    <footer className="footer">
      <p className="footer__text">{message}</p>
    </footer>
  );
}


/*

function Footer({ message }) { ... }

Define el componente funcional Footer.
Usa desestructuración de props → recibe directamente { message }.
Esto significa que cuando escribas <Footer message="..." />, el texto que pases se mostrará dentro del párrafo.

<p className="footer__text">{message}</p>
Muestra el texto dinámico que llega por props (message).
Clase BEM footer__text → mantiene consistencia en la estructura del CSS.

*/


export default Footer;
