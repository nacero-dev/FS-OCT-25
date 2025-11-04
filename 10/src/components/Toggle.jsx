import { useState } from "react"

const Toggle = () => {

    const [isToggled, setIsToggled] = useState(false)

    return (
        <>

            <h2>Ej 1-2</h2>
            <div>
                <button onClick={() => setIsToggled(!isToggled)}>
                    {isToggled ? "On" : "Off"}

                </button>
            </div>

        </>
    )

}

export default Toggle

/* 

🧠 Paso a paso: qué está pasando
1️⃣ import { useState } from "react";

Importamos el hook useState, que permite crear un estado interno dentro del componente.

2️⃣ const [isToggled, setIsToggled] = useState(false);

Aquí creamos una variable de estado llamada isToggled.

isToggled → almacena el estado actual del interruptor.
Inicialmente vale false (apagado).

setIsToggled → es la función que usamos para cambiar el valor.

💡 Recuerda:
React no deja modificar el valor directamente (isToggled = true ❌).
Siempre debes hacerlo con el setter (setIsToggled(true) ✅).

onClick={() => setIsToggled(!isToggled)}

Cada vez que haces clic, se ejecuta la función flecha.

!isToggled significa “el contrario del valor actual”.

Si estaba false, pasa a true.

Si estaba true, pasa a false.



*/