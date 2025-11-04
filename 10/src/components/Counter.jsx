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


*/