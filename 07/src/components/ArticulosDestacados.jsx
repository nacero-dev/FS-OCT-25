import React from "react";
import "./ArticulosDestacados.css";
import ArticuloCard from "./ArticuloCard";

const ArticulosDestacados = ({ articles }) => {
  /* ver abajo */
  const articulosFiltrados = articles.filter(
    (articulo) => articulo.destacado === true
  );

  return (
    <div className="articulos-destacados">
      <h2 className="articulos-destacados__titulo">Artículos Destacados</h2>

      {articulosFiltrados.length === 0 ? (
        <p className="articulos-destacados__mensaje">
          No hay artículos destacados 📄
        </p>
      ) : 
      
      
      // (
      //   <ul className="articulos-destacados__lista">
      //     {articulosFiltrados.map((articulo, index) => (
      //       <li key={index} className="articulos-destacados__item">
      //         <h3 className="articulos-destacados__nombre">{articulo.titulo}</h3>
      //         <p className="articulos-destacados__contenido">
      //           {articulo.contenido}
      //         </p>
      //       </li>
      //     ))}
      //   </ul>
      // )
      
      
      (
        <div className="articulos-destacados__lista">
          {articulosFiltrados.map((articulo, index) => (
            <ArticuloCard
              key={index}
              titulo={articulo.titulo}
              contenido={articulo.contenido}
            />
          ))}
        </div>
      )
      
      
      
      }
    </div>
  );
};

export default ArticulosDestacados;


/* 

const articulosFiltrados = articles.filter(
  (articulo) => articulo.destacado === true
);

.filter() es un método propio de los arrays de JavaScript.

articles.filter(...) → Recorre cada elemento del array articles.

(articulo) → Representa cada objeto individual dentro del array (igual que producto o tarea en tus ejemplos anteriores).

articulo.destacado === true → Es la condición de filtrado.


(articulo) => articulo.destacado === true

Cuando usas un método como .filter(), este necesita una función que le diga cómo decidir qué elementos conservar.

Esa función se llama función callback (una función que se pasa como argumento a otra función).

👉 En este caso, .filter() espera algo así:

array.filter(funcionQueDevuelveTrueOFalse)

Por cada elemento del array, ejecuta esa función callback y:

Si devuelve true, el elemento se queda.
Si devuelve false, el elemento se descarta

🧠 2. Estructura completa del callback

(articulo) => articulo.destacado === true

Esto es una función flecha (arrow function).
La estructura general es:

(parametro) => expresión

(articulo) → es el parámetro.
Representa cada elemento del array que .filter() está procesando.

articulo.destacado === true → es la expresión que se evalúa.
Devuelve true o false, y eso es lo que .filter() usa para decidir si incluye ese elemento en el nuevo array.

🔍 3. Qué hace .filter() con esa función

Piensa que .filter() hace esto internamente:

for (let i = 0; i < articles.length; i++) {
  const articulo = articles[i];
  if (articulo.destacado === true) {
    // Lo incluye en el nuevo array
  }
}

La parte que tú escribes como (articulo) => articulo.destacado === true
es la “fórmula” que .filter() usa en su if.

*/