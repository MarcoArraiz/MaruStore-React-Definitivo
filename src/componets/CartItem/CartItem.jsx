import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"


const CartItem = ({item, cantidad}) => {
    const {eliminarProducto} = useContext(CarritoContext);

    return (
        <div class="container-fluid card">
            
            <h4> {item.nombre} </h4>
            <p> Cantidad: {cantidad} </p>
            <p> Precio: $ {item.precio} </p>
            <button class="btn btn-dark" onClick={()=> eliminarProducto(item.id)}> Eliminar </button>
        </div>
    )
}

export default CartItem