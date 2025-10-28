import { useState } from "react"

const List = () => {
    const [items, setItems] = useState([])
    return (
        <>

            <h2>Ej1-3</h2>

            <button onClick={() => setItems([...items, `Items ${items.length + 1}`])}> Agregar item</button>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{index}</li>
                ))}

            </ul>

        </>


    )

}

export default List