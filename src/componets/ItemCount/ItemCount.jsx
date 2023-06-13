import { useState } from 'react'

const ItemCount = ({ inicial, stock, funcionAgregar }) => {

    const [contador, setContador] = useState(inicial);

    const incrementar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }

    const decrementar = () => {
        if (contador > inicial) {
            setContador(contador - 1);
        }
    }

    return (
        <>
            <div class="container">
                <button class="btn btn-dark" onClick={decrementar}> - </button>
                <strong> {contador} </strong>
                <button class="btn btn-dark" onClick={incrementar}> + </button>
            </div>
            <br />
            <button class="btn btn-dark" onClick={() => funcionAgregar(contador)}> Agregar al Carrito </button>
        </>
    )
}

export default ItemCount