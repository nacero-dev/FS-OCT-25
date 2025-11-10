import { useState } from "react";
import "./EjercicioFrutas.css";

// Array inicial fuera del componente
const frutasIniciales = [
  { id: 1, nombre: "Manzana" },
  { id: 2, nombre: "Banana" },
  { id: 3, nombre: "Fresa" },
];

const EjercicioFrutas = () => {
  const [frutas, setFrutas] = useState(frutasIniciales);
  const [nuevaFruta, setNuevaFruta] = useState("");

  const agregarFruta = () => {
    if (nuevaFruta.trim() === "") return;

    const frutaNueva = {
      id: frutas.length + 1,
      nombre: nuevaFruta,
    };

    setFrutas([...frutas, frutaNueva]);
    setNuevaFruta("");
  };

  return (
    <div className="ej-frutas">
      <h3>Lista de frutas</h3>

      <input
        type="text"
        placeholder="Nueva fruta"
        value={nuevaFruta}
        onChange={(e) => setNuevaFruta(e.target.value)}
      />

      <button onClick={agregarFruta}>Agregar</button>

      <ul>
        {frutas.map((fruta) => (
          <li key={fruta.id}>{fruta.nombre}</li>
        ))}
      </ul>
    </div>
  );
};

export default EjercicioFrutas;


/* 

1) Array inicial externo
const frutasIniciales = [...]
Datos fijos que no cambian. Viven fuera del componente.

2) Estado de la lista
const [frutas, setFrutas] = useState(frutasIniciales);
React controla la lista porque va a cambiar cuando se agreguen frutas.

3) Estado del input
const [nuevaFruta, setNuevaFruta] = useState("");
Guarda lo que el usuario escribe.

4) El usuario escribe
onChange={(e) => setNuevaFruta(e.target.value)}

5) El usuario hace clic en "Agregar"
<button onClick={agregarFruta}>Agregar</button>
Ejecuta:
if (nuevaFruta.trim() === "") return;
Evita añadir una fruta vacía.

Luego crea un nuevo objeto:
const frutaNueva = {
  id: frutas.length + 1,
  nombre: nuevaFruta,
};

Y actualiza el estado:
setFrutas([...frutas, frutaNueva]);
React vuelve a renderizar la lista.

6) Limpia el input
setNuevaFruta("");

7) Se muestra la nueva lista con .map()
frutas.map((fruta) => <li key={fruta.id}>{fruta.nombre}</li>)
La nueva fruta aparece en pantalla.

*/