import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';
import './CartWidget.css'

const CartWidget = () => {
    const { carrito } = useContext(CarritoContext);
    const imgCarrito = "../img/cart.png";

    return (
        <div>
            <Link style={{ textDecoration: "none" }} to='/cart'>
                <img className='imgCarrito' src={imgCarrito} alt="Carrito de Compras" />
                {
                    cantidadTotal > 0 && <strong className='itemsIndicador'> {cantidadTotal} </strong>
                }
            </Link>
        </div>
    )
}

export default CartWidget