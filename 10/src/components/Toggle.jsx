import { useState} from "react"

const Toggle = () => {

    const[isToggled, setIsToggled] = useState(false)
   
    return(
        <>
        
             <h2>Ej 1-2</h2>
             <div>
                 <button onClick={() => setIsToggled(!isToggled)}>
                {isToggled ? "On":"Off"}

            </button>
        </div>
        
        </>
    )

}

export default Toggle