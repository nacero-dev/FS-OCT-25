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
