import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import Item from "../Item/Item";


const CartItem = (item, cantidad) => {
    const {eliminarProducto} = useContext(CarritoContext);

    return (
        <div>
            <h4> {item.nombre} </h4>
            <p> Cantidad: {cantidad} </p>
            <p> Precio: $ {item} </p>
            <button onClick={()=> eliminarProducto(item.id)}> Eliminar </button>
        </div>
    )
}

export default CartItem