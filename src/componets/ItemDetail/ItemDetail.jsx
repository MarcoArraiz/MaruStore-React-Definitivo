import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const ItemDetail = ({ id, nombre, precio, img, stock }) => {
    const [agregarCantidad, setAgregarCantidad] = useState(0);
    const manejadorCantidad = (cantidad) => {
        setAgregarCantidad(cantidad);
        console.log("Productos agregados:" + cantidad);
    }

    return (
        <div class=" container-fluid card mb-3" style={{ width: '600px' }}>
            <img src= {img} class="card-img-top" alt= {nombre} />
                <div class="card-body">
                    <h5 class="card-title"> {nombre} </h5>
                    <p class="card-text"> {precio} </p>
                    <p class="card-text"> {id} </p>
                </div>
            {
                agregarCantidad > 0 ? (<link to="/cart"> Terminar de comprar </link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
            }
        </div>
    )
}

export default ItemDetail