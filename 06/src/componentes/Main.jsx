// src/componentes/Main.jsx
import './Main.css';
import Calculadora from './Calculadora';
import Section from './Section';
import Button from './Button'; // ← Importamos el componente Button



function Main() { /*Define el componente funcional Main, sin props porque en este caso su contenido es fijo (no depende del padre App.jsx).*/

    const handleButtonClick = () => {
        alert('¡Gracias por visitar nuestra calculadora React!');
    };


    return (
        <main className="main">
            <h2 className="main__title">Bienvenido a la Calculadora React</h2>

            <p className="main__text">
                Experimenta con nuestra calculadora y descubre el poder de los componentes reutilizables.
            </p>

            <Calculadora />

            <div className="main__button-container">
                <Button text="Haz clic aquí" onClick={handleButtonClick} />
            </div>


            <Section
                title="Sobre nosotros"
                content="Somos una web de ejemplo construida con React y Vite, enfocada en el aprendizaje modular."
            />
        </main>
    );
}


/* 
CALC:
<Calculadora /> Aquí React renderiza el componente Calculadora.jsx (que tiene su propio JSX y CSS).
<Section title="..." content="..." />
Se renderiza un componente Section y se le pasan dos props:
title: texto del encabezado
content: texto del párrafo

Internamente, Section las recibe así:
function Section({ title, content }) {
  return (
    <section>
      <h3>{title}</h3>
      <p>{content}</p>
    </section>
  );
}

BOTON:
const handleButtonClick = () => { ... }
Define una función que se ejecutará cuando se haga clic en el botón.
Aquí simplemente mostramos un alert, pero podrías usarlo para cualquier acción, por ejemplo:
Cambiar un estado,
Navegar a otra sección,
O reiniciar la calculadora.
<Button text="Haz clic aquí" onClick={handleButtonClick} />
Renderiza el botón y le pasa dos props:
text="Haz clic aquí" → texto visible del botón.
onClick={handleButtonClick} → función que se ejecuta al pulsarlo.

*/

export default Main;
