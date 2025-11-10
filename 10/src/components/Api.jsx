
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


/*

setData(data.slice(0, 5))
extrayendo los elementos desde el índice 0 hasta el índice 5 (sin incluir el 5)

✅ 2. Estado inicial
const [data, setData] = useState([])


data: array donde guardaremos lo que devuelve la API.

Empieza vacío ([]).

✅ 3. useEffect con dependencias vacías
useEffect(() => {
  ...
}, [])


Este patrón significa:

El código dentro del useEffect se ejecuta UNA sola vez.
Equivale a “código que corre al cargar el componente por primera vez”.
React usa esto para efectos secundarios:
llamadas a APIs
timers
listeners globales
conexión a sockets
etc.


const fetchData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts")
  const data = await response.json()
  setData(data.slice(0, 5))
}
fetchData()

por partes:

A) Llamada a la API
const response = await fetch("https://jsonplaceholder.typicode.com/posts")
fetch() hace una solicitud HTTP.
La API nos devuelve una lista de posts (100 objetos).

B) Parseo del JSON
const data = await response.json()
Convierte la respuesta en un array de objetos JavaScript.
Ejemplo de lo que devuelve la API:
{
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati",
  "body": "..."
}

C) Tomar solo los primeros 5 elementos
data.slice(0, 5)
.slice() NO modifica el array original.
Devuelve otro array con los primeros 5 posts.

Esto evita mostrar los 100 completos.

D) Guardar en el estado con setData
setData(data.slice(0, 5))
Esto dispara un re-render del componente.
Después del setData:
React vuelve a pintar el componente.
Ahora data ya contiene los primeros 5 posts.

(Se verá mas a detalle posteriormente)


 */