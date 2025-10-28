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