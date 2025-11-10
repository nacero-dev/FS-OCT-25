// src/componentes/Section.jsx
import './Section.css';

function Section({ title, content }) {
  return (
    <section className="section">
      <h3 className="section__title">{title}</h3>
      <p className="section__content">{content}</p>
    </section>
  );
}

export default Section;

/* Main.jsx importa Section:

import Section from './Section';


Main.jsx lo usa dentro del <main>:

<Section title="Sobre nosotros" content="Somos una web..." />


React llama a Section, pasándole las props.

Section.jsx recibe esas props:

function Section({ title, content }) {
  return (
    <section>
      <h3>{title}</h3>
      <p>{content}</p>
    </section>
  );
}


React renderiza el HTML final dentro de <main>.*/