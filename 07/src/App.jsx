import React, { useState } from "react";
import Antonio from "./components/ListaFrutas";
import ListaTareas from "./components/ListaTareas";
import ArticulosDestacados from "./components/ArticulosDestacados";
import AlumnosAprobados from "./components/AlumnosAprobados";
import ListaUsuarios from "./components/ListaUsuarios";

function App() {

  /*ver abajo 1.*/
  const frutas = ["Manzana", "Plátano", "Fresa", "Uva"];

  /*ver abajo 2.*/
  const tareas = [
    { nombre: "Estudiar React", completada: true },
    { nombre: "Hacer la compra", completada: true },
    { nombre: "Practicar surf", completada: true },
  ];

  const articulos = [
    {
      titulo: "React Hooks",
      contenido: "Aprende sobre useState y useEffect",
      destacado: true,
    },
    {
      titulo: "JavaScript Moderno",
      contenido: "Novedades de ES6 en adelante",
      destacado: false,
    },
    {
      titulo: "CSS Modules",
      contenido: "Cómo aislar estilos en React",
      destacado: true,
    },
  ];

  const calificaciones = [
    { id: 1, nombre: "Ana", nota: 8 },
    { id: 2, nombre: "Luis", nota: 4 },
    { id: 3, nombre: "Carmen", nota: 6 },
  ];

  const usuarios = [
    { id: 101, nombre: "Carlos" },
    { id: 102, nombre: "María" },
    { id: 103, nombre: "Sofía" },
  ];

  /*ver abajo 3.*/
  const [contadorDestacados] = useState(
    articulos.filter((art) => art.destacado).length
  );

  return (

    <div>

      <h1 style={{ textAlign: "center" }}>Mis Listas</h1>

      <h2 style={{ textAlign: "center" }}>
        Artículos destacados: {contadorDestacados}
      </h2>

      /*1.1*/
      <Antonio fruits={frutas} />

      /*1.2*/

      <ListaTareas tasks={tareas} />

      /*2.2 (2.3 viene desde ArticulosDestacados.jsx)*/
      <ArticulosDestacados articles={articulos} />

      /*3.2*/
      <AlumnosAprobados grades={calificaciones} />

      /*3.3*/
      <ListaUsuarios users={usuarios} />

    </div>
  );
}

export default App;


/* 

1. Explicación Frutas:

<Antonio fruits={frutas} />


| Elemento | Qué es                                                         | Dónde vive                           | Ejemplo                                 |
| -------- | -------------------------------------------------------------- | ------------------------------------ | --------------------------------------- |
| `fruits` | **Nombre del prop** (la “etiqueta” que el hijo espera recibir) | En el **componente padre (App.jsx)** | `fruits={frutas}`                       |
| `frutas` | **Variable real** con los datos (el valor que se envía)        | También en el **padre (App.jsx)**    | `const frutas = ["Manzana", "Plátano"]` |


💡 En palabras simples:

En React, lo que está antes del signo = (fruits)
es el nombre de la prop que recibe el componente hijo.

Lo que está después del signo = (frutas)
es el valor o variable que le estás pasando.


const frutas = ["Manzana", "Plátano", "Fresa", "Uva"];

<Antonio fruits={frutas} />

Significa literalmente:

“Renderiza el componente Antonio (o ListaFrutas)
y pásale una prop llamada fruits
cuyo valor es el array frutas.”


Entonces, cuando React ejecuta tu componente ListaFrutas.jsx, lo hace más o menos así internamente:
Listafruits({ fruits: ["Manzana", "Plátano", "Fresa", "Uva"] });


Y dentro de ListaFrutas.jsx, lo estás recibiendo aquí 👇
const Listafruits = ({ fruits }) => {
  // Aquí dentro "fruits" ya contiene ["Manzana", "Plátano", "Fresa", "Uva"]


Imagina que estás enviando una carta (App.jsx)
y el componente hijo (ListaFrutas.jsx) es la persona que la recibe.
En el sobre escribes la etiqueta (prop): fruits=...
Dentro del sobre metes el contenido real (valor): ["Manzana", "Plátano"]
Entonces el receptor (el hijo) abre la carta y tiene dentro una variable llamada fruits que contiene esas frutas.
}

const Listafruits = ({ lista }) => (
  <p>Total de frutas: {lista.length}</p>
);

🔹 Lo importante es que el nombre del prop en App (izquierda del =)
coincida con el nombre usado en el hijo (entre llaves).


Resumen Visual 


// App.jsx (padre)
const frutas = ["Manzana", "Plátano"];
<Antonio fruits={frutas} />

↓

📦 React entrega al hijo:

// ListaFrutas.jsx (hijo)
props = {
  fruits: ["Manzana", "Plátano"]
}

↓

Y el hijo usa desestructuración para acceder a esa prop más fácilmente:

const Listafruits = ({ fruits }) => {
  return <p>Total de frutas: {fruits.length}</p>;
};

| Nombre     | Significa                                          | Dónde se declara               |
| ---------- | -------------------------------------------------- | ------------------------------ |
| `fruits`   | Nombre del **prop** que viaja al hijo              | En el JSX del padre            |
| `frutas`   | **Variable con el valor real** que se pasa al hijo | En el padre (`App.jsx`)        |
| `{fruits}` | **Uso de la prop** dentro del componente hijo      | En el hijo (`ListaFrutas.jsx`) |



Qué es index en un .map() de React

Cuando usas .map() en un array:
array.map((item, index) => { ... })


Recibes dos valores automáticamente:
item → el elemento actual del array
index → la posición de ese elemento dentro del array

const frutas = ["Manzana", "Pera", "Uva"];


| Iteración | fruta     | index |
| --------- | --------- | ----- |
| 1         | "Manzana" | 0     |
| 2         | "Pera"    | 1     |
| 3         | "Uva"     | 2     |



2. Explicación Tareas: 

🧩 1. Qué es realmente tareas

const tareas = [
  { nombre: "Estudiar React", completada: true },
  { nombre: "Hacer la compra", completada: true },
  { nombre: "Practicar surf", completada: true },
];

Esto no es un solo objeto, sino un array de objetos (es decir, una lista de varios objetos con propiedades).

Visualmente:

| Índice | nombre            | completada |
| ------ | ----------------- | ---------- |
| 0      | "Estudiar React"  | true       |
| 1      | "Hacer la compra" | true       |
| 2      | "Practicar surf"  | true       |


La propiedad .length devuelve el número total de tareas, sin importar si están completadas o no.
devuelve el número total de tareas, sin importar si están completadas o no.

tareas.length === 3

porque hay tres objetos dentro del array.


3. Explicacion contador articulos destacados:

  const [contadorDestacados, setContadorDestacados] = useState(
    articulos.filter((art) => art.destacado).length
  );

  const [contadorDestacados, setContadorDestacados] = useState(valorInicial);

  destacado: true
articulos.filter((art) => art.destacado).length
¿Qué hace esto?

.filter((art) => art.destacado)
→ Devuelve SOLO los artículos destacados

.length
→ Cuenta cuántos son

Cuando escribes:
articulos.filter((art) => art.destacado)
o la versión más explícita:
articulos.filter((art) => art.destacado === true)
solo se consideran los artículos cuyo valor destacado es true.


*/