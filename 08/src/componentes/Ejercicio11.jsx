import { useState } from "react";
import "./EjercicioFiltrarEdad.css";

// Array externo
const personasIniciales = [
  { id: 1, nombre: "Ana", edad: 25 },
  { id: 2, nombre: "Luis", edad: 47 },
  { id: 3, nombre: "Carlos", edad: 32 },
  { id: 4, nombre: "Marta", edad: 52 },
  { id: 5, nombre: "Pedro", edad: 18 },
];

const EjercicioFiltrarEdad = () => {
  const [edadMaxima, setEdadMaxima] = useState("");

  const personasFiltradas = personasIniciales.filter((persona) => {
    if (edadMaxima === "") return true;
    return persona.edad < Number(edadMaxima);
  });

  const total = personasFiltradas.length;

  return (
    <div className="ej-edad">
      <h3>Filtrar personas menores de una edad</h3>

      <input
        type="number"
        placeholder="Edad máxima"
        value={edadMaxima}
        onChange={(e) => setEdadMaxima(e.target.value)}
      />

      <p>Total que cumplen: {total}</p>

      <ul>
        {personasFiltradas.map((persona) => (
          <li key={persona.id}>
            {persona.nombre} - {persona.edad} años
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EjercicioFiltrarEdad;


/* Paso a paso

1) Array externo
const personasIniciales = [...]
Datos estáticos. No cambian.
Por eso viven fuera del componente.

2) Estado para guardar la edad seleccionada

const [edadMaxima, setEdadMaxima] = useState("");
Al inicio es "" (vacío).

Representa el número que el usuario escribe.

Es un input controlado.

3) Input que controla la edad máxima

<input
  type="number"
  placeholder="Edad máxima"
  value={edadMaxima}
  onChange={(e) => setEdadMaxima(e.target.value)}
/>

4) Filtro principal

Caso A → edadMaxima === ""

El input está vacío:
✅ Se devuelve true para todos
✅ Nadie se filtra
✅ Se muestran todas las personas

Caso B → el usuario pone una edad (ej. 40)

Entonces para cada persona se compara:
persona.edad < edadMaxima

Ana 25 → 25 < 40 → true ✅ se queda
Luis 47 → 47 < 40 → false ❌ se elimina
Carlos 32 → 32 < 40 → true ✅ se queda
Marta 52 → 52 < 40 → false ❌ se elimina
Pedro 18 → 18 < 40 → true ✅ se queda

5) Conteo
const total = personasFiltradas.length;
Da cuántas personas cumplen la condición.

6) Mostrar en pantalla
<p>Total que cumplen: {total}</p>

<ul>
  {personasFiltradas.map((persona) => (
    <li key={persona.id}>
      {persona.nombre} - {persona.edad} años
    </li>
  ))}
</ul>



*/
