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

Render inicial:

isToggled = false

React muestra → botón con texto Off.

Clic 1:
setIsToggled(!false) → setIsToggled(true)
Nuevo estado: isToggled = true
React re-renderiza → se muestra On.

Clic 2:
setIsToggled(!true) → setIsToggled(false)
Nuevo estado: isToggled = false
React re-renderiza → se muestra Off.

Clic 3:
vuelve a cambiar a On
y así sucesivamente.

8) Variantes útiles (si quisieras experimentar)
Versión con dos botones
<button onClick={() => setIsToggled(true)}>Encender</button>
<button onClick={() => setIsToggled(false)}>Apagar</button>

Con estilos dinámicos
style={{
  backgroundColor: isToggled ? "green" : "gray"
}}

Con texto más descriptivo
{isToggled ? "Encendido" : "Apagado"}


*/