import { useEffect, useState } from "react";

export const Peticion = ({ api }) => {
    const [pedidoApi, setPedidoApi] = useState();

    const getApi = async () => {
        
        let response = await fetch(`https://rickandmortyapi.com/api/character/?name=${api}`);
        let data = await response.json()
        setPedidoApi(data)
    }

    useEffect(() => {
        if (api) {
            getApi();
        }
    }, [api])

    return (
        <>
            <h1>Nombre: {pedidoApi?.results?.[0]?.name}</h1>
            <img src={pedidoApi?.results?.[0]?.image} alt={pedidoApi?.results?.[0]?.name} />
            <h2>Género: {pedidoApi?.results?.[0]?.gender}</h2>
            <h2>Especie: {pedidoApi?.results?.[0]?.species}</h2>
            <h2>Estado: {pedidoApi?.results?.[0]?.status}</h2>
        </>
    )
}
