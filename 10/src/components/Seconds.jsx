
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