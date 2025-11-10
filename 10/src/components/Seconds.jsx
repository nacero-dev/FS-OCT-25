
import { useState, useEffect } from 'react'
const Seconds = () => {
    const [seconds, setSeconds] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
        setSeconds((prev) => prev + 1)
    }, 1000)

        return () => clearInterval(interval)
    }, []) /* esto es cuando se desmonte*/

    return (

        <>
            <h3>Ej 2-2</h3>
            <p>Seconds: {seconds}</p>
        </>
    )
}

export default Seconds


/*
✅ 2) Estado inicial
const [seconds, setSeconds] = useState(0)
seconds = contador de tiempo.
Comienza en 0.
Cada segundo aumenta a 1, 2, 3, 4...

✅ 3) useEffect que se ejecuta solo una vez
useEffect(() => {
  ...
}, [])
El array vacío [] significa:
Ejecutar solo una vez, cuando el componente se monta.
Es el equivalente a componentDidMount en React clásico.

✅ 4) setInterval dentro del useEffect
const interval = setInterval(() => {
  setSeconds((prev) => prev + 1)
}, 1000)

Esto hace que cada 1000 ms:
React llame a setSeconds(prev + 1)
React re-renderice el componente con el nuevo valor
¿Por qué usar la forma funcional (prev) => prev + 1?

Porque cuando el intervalo se ejecuta:
Necesitamos el valor más reciente de seconds
Con la forma funcional evitamos errores si React agrupa renders internamente
Es la forma segura.

return () => clearInterval(interval)
Esto es fundamental.
Cuando el componente se desmonta:
-React ejecuta esta función.
-Limpia el intervalo.
-Evita que el setInterval siga corriendo en memoria.
-Evita “leaks” (intervalos que siguen vivos sin razón).
-Si no limpias, el contador seguiría aumentando incluso si ya no está en pantalla.


Flujo completo paso a paso

Se monta el componente.
React ejecuta el useEffect.
Se activa setInterval.
Cada segundo:
React llama a setSeconds(prev => prev + 1)
seconds cambia
React re-renderiza
El usuario va viendo los segundos subir.
Si el componente desaparece:
React ejecuta el return del useEffect
clearInterval detiene el temporizador

*/

