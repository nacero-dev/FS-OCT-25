import React from "react";
import "./App.css";
import Ejercicio1 from "./componentes/Ejercicio1";
import Ejercicio2 from "./componentes/Ejercicio2";
import Ejercicio3 from "./componentes/Ejercicio3";
import Ejercicio4 from "./componentes/Ejercicio4";

const App = () => {
  return (
    <div className="app-container">
      <h1>Ejercicios con .map() en React</h1>

      <section className="ejercicio">
        <h2>Ejercicio 1</h2>
        <Ejercicio1 />
      </section>

      <section className="ejercicio">
        <h2>Ejercicio 2</h2>
        <Ejercicio2 />
      </section>

      <section className="ejercicio">
        <h2>Ejercicio 3</h2>
        <Ejercicio3 />
      </section>

      <section className="ejercicio">
        <h2>Ejercicio 4</h2>
        <Ejercicio4 />
      </section>
    </div>
  );
};

export default App;


