import { useState, useEffect } from 'react'
import { getProductos, getProductosPorCategoria } from '../../asyncmock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom';
import "./ItemListContainer.css"

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
            <h2 className='titulo'>Productos</h2>
            <ItemList productos={productos} />
        </div>
    )
}

export default ItemListContainer