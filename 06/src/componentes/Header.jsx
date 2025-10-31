// src/componentes/Header.jsx
import './Header.css';

function Header({ siteName, links }) { /* desestructuración para recibir las props: siteName: texto del título de la web y links: array de objetos con la forma { href: string, label: string }.*/
  return (
    <header className="header"> 
      <h1 className="header__title">{siteName}</h1>
      <nav className="header__nav">
        <ul className="header__list">
          {links.map((link, index) => ( 
            <li key={index} className="header__item">
              <a href={link.href} className="header__link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

/*

header contenedor semántico del encabezado de la página y Clase header para estilos
<h1 className="header__title">{siteName}</h1> , muestra el título que viene por props
<nav className="header__nav" aria-label="Principal"> Área de navegación semántica.
<ul className="header__list">
{links.map((link, index) => ( ... ))}- Itera sobre el array links para generar el menú dinámicamente, Por cada link crea un <li> con su <a>.
key={index}: clave de React para identificar cada ítem.
<a href={link.href} className="header__link">{link.label}</a>
El texto visible del enlace es label, el destino es href.


export default Header;


*/



export default Header;
