import {useState} from 'react'

const Counter = () => {

    const [count, setCount] = useState(0)

    return (
        <>
            <h2>Ej 1-1</h2>

            <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button>     
        
        </>

    )

}

export default Counter

/* 
Qué hace:
Un contador que comienza en 0 y aumenta en 1 cada vez que presionas el botón.
Hook usado: useState
count: valor actual del contador.
setCount: función para actualizarlo.
Concepto:
Cambia el estado local y React vuelve a renderizar el componente.

const [count, setCount] = useState(0)
count es la variable de estado

onClick={() => setCount((count) => count + 1)}
count entre paréntesis es el parámetro de la
función actualizadora (también llamado functional updater)
Representa el valor más reciente del estado en ese instante.

count is {count}
{count} dentro del botón muestra el valor actual del estado con un texto anterior "count is" {count}


3) Declaración de estado
count: valor actual del contador (empieza en 0).
setCount: función para actualizar ese valor.
Regla: no reasignas count directamente (nada de count = count + 1); siempre usas setCount(...).

4) Render de la UI (JSX)
<button onClick={...}>
  count is {count}
</button>

JSX “parece HTML”, pero es JavaScript que describe la interfaz.
{count} inserta el valor del estado dentro del botón. Cada vez que count cambia, React vuelve a renderizar y verás el número actualizado.

5) El manejador de clic y la “forma funcional”
onClick={() => setCount((count) => count + 1)}
Cuando haces clic, se ejecuta esa función y llamas a setCount.
Estás usando la forma funcional: setCount(prev => prev + 1).
Esa forma recibe el valor más reciente del estado, lo cual es seguro si React agrupa varias actualizaciones.
Es equivalente (más claro) escribir:
onClick={() => setCount(prev => prev + 1)}

¿Por qué no setCount(count + 1) a secas?

Funciona en la mayoría de los casos simples, pero si haces varias actualizaciones seguidas en el mismo tick, puedes sumar sobre un valor “viejo”.
 La forma funcional evita ese problema.
 Render inicial: count = 0 → se pinta “count is 0”.

Clic:

React ejecuta tu función: setCount(prev => prev + 1).

React programa una actualización de estado.

React vuelve a ejecutar el componente con el nuevo estado: count = 1.

Se vuelve a renderizar: ahora se ve “count is 1”.

8) Variantes útiles (para practicar)

Incremento configurable:

const increment = (step = 1) => setCount(prev => prev + step)
<button onClick={() => increment(1)}>+1</button>
<button onClick={() => increment(5)}>+5</button>


Reset:

<button onClick={() => setCount(0)}>Reset</button>


Deshabilitar botón si supera un límite:

<button onClick={() => setCount(prev => prev + 1)} disabled={count >= 10}>
  count is {count}
</button>

*/