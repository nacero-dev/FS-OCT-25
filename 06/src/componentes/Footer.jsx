// src/componentes/Footer.jsx
import './Footer.css';
import Card from './Card';


function Footer({ message }) {
  return (
    <footer className="footer">
      <Card
        title="Créditos"
        content={message}
      />
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


/* en repaso:

1. El componente padre define el prop
Ejemplo en App.jsx:
<Footer message="© 2025 Mi Web de React. Todos los derechos reservados." />
Aquí está pasando:
El componente padre: App
El componente hijo: Footer
El prop: message
El valor del prop: "© 2025 Mi Web de React. Todos los derechos reservados."

2. El componente hijo recibe ese prop

function Footer({ message }) {
Aquí ocurre algo fundamental:
El padre envía un objeto con propiedades.
se utiliza desestructuración para extraer solo message.
function Footer({ message })
es equivalente a:
function Footer(props) {
  const message = props.message;
}

3. El hijo usa ese prop dentro de su HTML (JSX)
return (
  <footer className="footer">
    <p className="footer__text">{message}</p>
  </footer>
);
{message} inserta dinámicamente en el HTML el valor enviado por el padre.
Si el padre cambia el prop, el contenido del hijo se actualiza automáticamente.

✅ 4. Flujo completo explicado en tu oración (validación)

Tu frase:

“el componente padre establece el prop … y en el hijo se recibe como ({message}) y después se establece donde se va a estructurar en el html que en este caso es en <footer> y en <p> donde el contenido es el prop”

✅ Sí, así funciona exactamente.
Tu comprensión es correcta.


🧠 Resumen visual
PADRE: App.jsx
---------------------------------------------------
<Footer message="Texto dinámico enviado como prop" />

HIJO: Footer.jsx
---------------------------------------------------
function Footer({ message }) {
  return (
    <footer>
      <p>{message}</p>  ← aparece aquí el prop
    </footer>
  );
}

✅ Idea central para recordar

El padre decide qué datos enviar.
El hijo decide cómo mostrarlos.

Esa separación hace React modular, flexible y fácil de mantener.

*/




export default Footer;
