// src/App.jsx
import './App.css';
import Header from './componentes/Header';
import Main from './componentes/Main';
import Footer from './componentes/Footer';

function App() {
  const links = [
    { href: "#inicio", label: "Inicio" },
    { href: "#servicios", label: "Servicios" },
    { href: "#contacto", label: "Contacto" },
  ];

  return (
    <>
      <Header siteName="Mi Web de React" links={links} />
      <Main />
      <Footer message="© 2025 Mi Web de React. Todos los derechos reservados." />
    </>
  );
}

export default App;
