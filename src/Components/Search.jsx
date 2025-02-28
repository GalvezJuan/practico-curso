import { useRef } from "react"

export const Search = ({ val }) => {

    const inputRef = useRef()
    return <>
        <input ref={inputRef} onChange={() => val(inputRef.current.value)} type="text" name="" id="" placeholder="Ingresá el nombre de tu personaje" />
        <button> Buscar</button>
    </>


}
