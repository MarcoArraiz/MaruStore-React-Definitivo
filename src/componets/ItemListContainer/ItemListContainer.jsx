import { useState, useEffect } from 'react'
import { getProductos, getProductosPorCategoria } from '../../asyncmock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom';
import "./ItemListContainer.css"
import Carrusel from '../Carrusel/Carrusel';

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

    const {idCategoria} = useParams();

    useEffect(() => {

        const funcionProductos = idCategoria ? getProductosPorCategoria : getProductos;

        funcionProductos(idCategoria)
            .then(res => setProductos(res))
            .catch(error => console.error(error))

    }, [idCategoria])

    return (
        <div>
            <Carrusel/>
            <h2 class="titulo-secciones mt-2 text-light bg-dark titulo container-fluid">Productos</h2>
            <ItemList productos={productos} />
        </div>
    )
}

export default ItemListContainer