import { useEffect, useState } from "react";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

const Randy = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setNumber((prev) => prev + getRandomInt(1, 10));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h3>Ej 2-3</h3>
      <p>Número aleatorio: {number}</p>
    </>
  );
};

export default Randy;

/* 

getRandomInt(min, max)

Normaliza límites:

min = Math.ceil(min);   // redondea hacia arriba
max = Math.floor(max);  // redondea hacia abajo

Genera un entero en el intervalo [min, max) (incluye min, excluye max):
Math.floor(Math.random() * (max - min) + min)

Con getRandomInt(1, 10) obtienes valores enteros del 1 al 9.
Si quisieras del 1 al 10 inclusive, usarías:
Math.floor(Math.random() * (max - min + 1)) + min y pasar min=1, max=10.

3) Estado inicial
const [number, setNumber] = useState(0);
number: valor actual del contador.
setNumber: función para actualizarlo.
Comienza en 0.

4) useEffect con intervalo (montaje y limpieza)

useEffect(() => {
  const interval = setInterval(() => {
    setNumber((prev) => prev + getRandomInt(1, 10));
  }, 1000);

  return () => clearInterval(interval);
}, []);

[] → el efecto se ejecuta una sola vez al montar el componente.

Crea un setInterval que corre cada 1000 ms.
En cada tick:
Llama a setNumber(prev => prev + aleatorio).
Forma funcional (prev => ...) garantiza sumar sobre el valor más reciente, incluso con batching o ticks rápidos.
return → función de limpieza: al desmontar el componente, se limpia el intervalo para evitar fugas de memoria y actualizaciones sobre componentes desmontados.


4) useEffect con intervalo (montaje y limpieza)
useEffect(() => {
  const interval = setInterval(() => {
    setNumber((prev) => prev + getRandomInt(1, 10));
  }, 1000);

  return () => clearInterval(interval);
}, []);

[] → el efecto se ejecuta una sola vez al montar el componente.
Crea un setInterval que corre cada 1000 ms.
En cada tick:
Llama a setNumber(prev => prev + aleatorio).
Forma funcional (prev => ...) garantiza sumar sobre el valor más reciente, incluso con batching o ticks rápidos.
return → función de limpieza: al desmontar el componente, se limpia el intervalo para evitar fugas de memoria y actualizaciones sobre componentes desmontados.


) Render de la UI
<p>Número aleatorio: {number}</p>

Muestra el valor actualizado de number.
Cada vez que cambia el estado, React re-renderiza y se ve el nuevo total.

) Línea de tiempo (qué pasa realmente)

1. Monta el componente → number = 0.
2. useEffect se ejecuta una vez → programa setInterval cada 1s.
3. A los 1000 ms:
-Calcula un entero aleatorio en 1..9.
-setNumber(prev => prev + aleatorio) → por ejemplo 0 + 7 = 7.
-Re-render → muestra 7.

4. A los 2000 ms:
-Otro aleatorio (p.ej. 3).
-setNumber(prev => prev + 3) → 7 + 3 = 10.
-Re-render → muestra 10.

5. … y así sucesivamente.
6. Al desmontar → clearInterval(interval).



*/