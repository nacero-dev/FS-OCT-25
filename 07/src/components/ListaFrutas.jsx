import React from "react";
import "./Listafrutas.css";

const Listafruits = ({ fruits }) => {
  return (
    <div className="lista-frutas">
      <h2 className="lista-frutas__titulo">Lista de fruits</h2>
      <p className="lista-frutas__total">
        Total de fruits: {fruits.length}
      </p>
      <ul className="lista-frutas__lista">
        {fruits.map((fruit, index) => (
          <li key={index} className="lista-frutas__item">
            {fruit}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Listafruits;

/*1.2 
Porque en React no puedes escribir JavaScript directamente dentro del HTML del JSX,
pero sí puedes insertar valores dinámicos usando interpolación ({}).
✅ 1. ¿Qué significa interpolación en JSX?
Significa que puedes insertar JavaScript dentro del JSX usando llaves {}.
{fruits.length}
Eso no es HTML, es JavaScript ejecutado dentro del JSX.
✅ 2. ¿Por qué es obligatorio usar interpolación?
En React, dentro de un HTML JSX, esto NO funciona:
<p>Total: fruits.length</p>   // ❌ Esto es texto literal, no JS
React lo mostraría tal cual:
Total: fruits.length
Porque React interpreta eso como simple texto.
Entonces, para ejecutar JS y mostrar su resultado,
React te obliga a envolverlo así:
<p>Total: {fruits.length}</p>   // ✅ Evalúa fruits.length
✅ 5. ¿Por qué no se puede hacer sin interpolación?
❌ No puedes ejecutar JS directamente:
<p>Total de frutas: fruits.length</p>
❌ Ni hacer esto:
<p>Total de frutas: <script>fruits.length</script></p>
✅ Solo puedes hacerlo así:
<p>Total de fruits: {fruits.length}</p>

✅ 6. ¿Cómo explicar esto en una frase simple?
En React, la única forma de mostrar valores dinámicos dentro del HTML es usando interpolación con {}. Sin eso, React lo trataría como texto literal.

*/