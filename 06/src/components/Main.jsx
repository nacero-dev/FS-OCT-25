// src/components/Main.jsx
import React from "react";
import Calculadora from "./Calculadora";
import Section from "./Section";

function Main() {
  return (
    <main style={styles.main}>
      <h2>Bienvenido a nuestra página</h2>
      <p>Explora las secciones y prueba la calculadora.</p>
      <Calculadora />
      <Section
        title="Sobre nosotros"
        content="Somos una web de ejemplo creada con React y Vite."
      />
    </main>
  );
}

const styles = {
  main: {
    padding: "2rem",
  },
};

export default Main;
