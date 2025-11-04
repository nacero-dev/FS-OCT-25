import { useState } from "react";
import "./CuadroInteractivo.css";

export default function CuadroInteractivo() {
  const [borde, setBorde] = useState(false);
  const [color, setColor] = useState(false);

  return (
    <div
      className={`cuadro ${color ? "cuadro--hover" : ""} ${borde ? "cuadro--borde" : ""}`} /*condición ? valorSiTrue : valorSiFalse*/
      onMouseEnter={() => setColor(true)} /*define el estado useState, si true entonces setColor (true) por lo que cuadro--hover */
      onMouseLeave={() => setColor(false)} /*define el estado useState, si false entonces setColor (false) por lo que "" */
      onClick={() => setBorde(true)} /*Esto cambia el estado borde a true, así que la clase cuadro--borde se añade permanentemente. */
    ></div>
  );
}


/* 

1. ¿Cuándo se usan {} en JSX?

🧩 PRIMERA PARTE — ¿Cuándo se usan {} en JSX?

En React, JSX es una mezcla de HTML y JavaScript.
El HTML no entiende lógica ni variables, así que cuando quieres escribir
código JavaScript dentro de JSX, lo encierras entre llaves {}.

Ejemplos:

🔹 Ejemplo 1: mostrar una variable

const nombre = "Ana";
return <p>{nombre}</p>;

Sin las llaves → <p>nombre</p> mostraría literalmente la palabra nombre.
Con llaves → <p>{nombre}</p> ejecuta JavaScript e imprime Ana.

🔹 Ejemplo 2: expresión condicional (ternario)
<p>{activo ? "Encendido" : "Apagado"}</p>

Dentro de {} puedes poner cualquier expresión JS: operaciones, ternarios, funciones, etc.
Aquí React evalúa el ternario y muestra el texto correspondiente.

🔹 Ejemplo 3: dentro de un atributo (como className)
className={activo ? "boton boton--activo" : "boton"}

Como estás mezclando HTML (el atributo) con lógica JS (el ternario),
debes encerrar la parte JS entre {} para que React lo interprete como código.

Con “atributo”, me refiero a lo que en HTML tradicional se llama atributo de una etiqueta 
(por ejemplo: class, id, href, src, onClick, etc.).

🔹 En HTML “normal”

Los atributos son cosas como:

<button class="boton">Haz clic</button>
<img src="foto.png" alt="Imagen">
<a href="https://example.com">Ir</a>

Aquí, class, src, alt, href son atributos HTML.
Sus valores van entre comillas, como texto.


_________________________________________________

2. ¿Por qué las funciones flecha en los eventos?

onMouseEnter={() => setColor(true)}
onMouseLeave={() => setColor(false)}
onClick={() => setBorde(true)}


🔹 1️⃣ En React, los manejadores de eventos esperan una función

Cuando pones algo como:

onClick={...}


React no quiere que ejecutes la función de inmediato,
sino que le digas qué función debe ejecutar cuando ocurra el clic.

🔹 2️⃣ Diferencia clave entre “llamar” y “pasar una función”
onClick={setBorde(true)} ❌


Esto ejecutaría setBorde(true) en cuanto el componente se renderiza,
no cuando el usuario haga clic.

3. 

Cómo se usan en React las arrow functions?

En React, se usan por tres motivos principales:

1. Para definir componentes funcionales
const Boton = () => {
  return <button>Haz clic</button>;
};


Equivalente a:

function Boton() {
  return <button>Haz clic</button>;
}


💡 Pero la versión con flecha es más compacta y moderna.

2. Para manejar eventos (como onClick)
<button onClick={() => setActivo(!activo)}>
  Cambiar
</button>


Aquí, () => setActivo(!activo) es una función flecha anónima que:

No se ejecuta hasta que ocurra el evento.

Puede acceder al estado del componente porque hereda su this.

3. Para pasar funciones como props
<ComponenteHijo onAccion={() => console.log("Acción desde el hijo")} />


El hijo luego puede usar:

<button onClick={props.onAccion}>Ejecutar</button>







*/