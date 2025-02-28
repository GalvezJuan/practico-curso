import { useRef } from "react"

export const Search = ({ val }) => {

    const inputRef = useRef()
    return <>
        <input ref={inputRef} onChange={() => val(inputRef.current.value)} type="text" name="" id="" placeholder="Escribe aquí" />
        <button> Clic aquí</button>
    </>


}
