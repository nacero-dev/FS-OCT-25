import { useState} from "react"

const Input = () => {
    const[value, setValue] = useState("")

    return (

        <>

            <span>Input Value: {value}</span>
            <input
                type ="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />

        </>


    )
}

export default Input