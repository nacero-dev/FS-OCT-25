
import { useState, useEffect } from "react"

const Api = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts")
            const data = await response.json()
            setData(data.slice(0, 5))
        }
        fetchData()

    }, [])

    return (
        <>
            <h3>Ej 2-1</h3>
            <p>Revisa la consola para ver los datos obtenidos de la API.</p>
            <ul>
                {data.map(item => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </>
    )
}
export default Api


