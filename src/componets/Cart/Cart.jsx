import { useContext } from "react";
import { Link } from "react-router-dom";
import { CarritoContext } from "../../context/CarritoContext";
import CartItem from "../CartItem/CartItem";


const Cart = () => {
    const { carrito, vaciarCarrito } = useContext(CarritoContext);

    const totalCantidad = carrito.reduce((total, producto) => total + producto.cantidad, 0);

    const total = carrito.reduce((total, producto) => total + (producto.item.precio * producto.cantidad), 0);

    if (totalCantidad === 0) {
        return (
            <>
                <h2> No hay productos en el carrito</h2>
                <Link class="btn btn-dark" to='/'>Seguir Comprando</Link>
            </>
        )
    }

    return (
        <div>
            {carrito.map(producto => <CartItem key={producto.id} {...producto} />)}
            <h3> Cantidad Total: {totalCantidad} </h3>
            <h3> Total: $ {total} </h3>
            <button class="btn btn-dark" onClick={()=> vaciarCarrito()}> Vaciar Carrito </button>
            <Link class="btn btn-dark" to="/checkout"> Finalizar Compra </Link>
        </div>
    )
}

export default Cart