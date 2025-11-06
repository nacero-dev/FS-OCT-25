import { useState, useEffect } from "react";

/*1 ver abajo*/
const CustomSlider = ({ images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  /*2 Avanzar al siguiente slide*/
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };


  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };


  /* 2 */
  // Autoplay cada 3 segundos (opcional)
  useEffect(() => {
    if (images.length === 0) return;
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [images]);

  if (images.length === 0) {
    return (
      <div className="w-full text-center text-gray-500 py-8">
        No images provided
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-xl shadow-lg">
      {/* Contenedor de imágenes */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className="w-full flex-shrink-0 object-cover"
          />
        ))}
      </div>

      {/* Botón Anterior */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800/50 hover:bg-gray-800 text-white p-2 rounded-full"
        aria-label="Previous Slide"
      >
        ‹
      </button>

      {/* Botón Siguiente */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800/50 hover:bg-gray-800 text-white p-2 rounded-full"
        aria-label="Next Slide"
      >
        ›
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default CustomSlider;


/* 
1.-
Supón que el estado vale 0 ahora mismo:
const [currentIndex, setCurrentIndex] = useState(0);
Cuando ejecutas:
setCurrentIndex((prevIndex) => prevIndex + 1);
React internamente hace:
Simulación interna:
const prevIndex = currentIndex; // o sea 0
setCurrentIndex(prevIndex + 1); // ahora será 1
Luego React actualiza el valor del estado y vuelve a renderizar el componente.

const nextSlide = () => {
  setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
};

Entonces cuando haces clic en el botón “siguiente”:
React llama a esa función.
Le pasa el valor actual del estado (prevIndex).
Calcula el nuevo valor → (prevIndex + 1) % images.length.
Actualiza el estado (currentIndex) con ese resultado.
React vuelve a renderizar la interfaz mostrando la nueva imagen.  

| Expresión | Operación matemática  | Resultado | Significado                    |
| --------- | --------------------- | --------- | ------------------------------ |
| `0 % 3`   | 0 ÷ 3 = 0 resto **0** | 0         | estamos en la **1.ª imagen**   |
| `1 % 3`   | 1 ÷ 3 = 0 resto **1** | 1         | estamos en la **2.ª imagen**   |
| `2 % 3`   | 2 ÷ 3 = 0 resto **2** | 2         | estamos en la **3.ª imagen**   |
| `3 % 3`   | 3 ÷ 3 = 1 resto **0** | 0         | volvemos a la **1.ª imagen** ✅ |

1/3 = es mod 1 dado a que no se pudo dividir por nada el numero entonces queda el numero completo como resto "1"
2/3 = es mod 2 dado a que no se pudo dividir por nada el numero entonces queda el numero completo como resto "2"


2.-
Sintaxis de set Interval
setInterval(función, milisegundos);

*/