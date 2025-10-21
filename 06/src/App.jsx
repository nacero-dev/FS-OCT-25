import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  const links = [
    { label: "Inicio", href: "#" },
    { label: "Servicios", href: "#" },
    { label: "Contacto", href: "#" },
  ];

  return (
    <>
      <Header siteName="Mi Web con React" links={links} />
      <Main />
      <Footer message="© 2025 Mi Web con React. Todos los derechos reservados." />
    </>
  );
}

export default App;
