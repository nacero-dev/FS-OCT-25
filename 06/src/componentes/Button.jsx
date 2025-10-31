// src/componentes/Button.jsx
import './Button.css';

function Button({ text, onClick }) {
  return (
    <button className="btn" onClick={onClick}>
      {text}
    </button>
  );
}

/* function Button({ text, onClick }) { ... }
Define un componente funcional llamado Button.

🔹 Usa desestructuración en los parámetros para extraer dos props:

text: el texto que aparecerá dentro del botón.
onClick: la función que se ejecutará cuando el usuario haga clic.

return ( <button className="btn" onClick={onClick}> {text} </button> );

Devuelve el JSX del botón.
<button> → elemento HTML estándar.
className="btn" → clase para aplicar el CSS del botón.
onClick={onClick} → React ejecutará la función pasada desde el padre cuando se haga clic.
{text} → el contenido visible del botón.

*/


export default Button;
