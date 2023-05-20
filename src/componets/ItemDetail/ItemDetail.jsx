import './ItemDetail.css'

const ItemDetail = ({ id, nombre, precio, img }) => {
    return (
        <div className='contenedorItem'>
            <img src={img} alt={nombre} />
            <h2>Nombre: {nombre} </h2>
            <h3>Precio: {precio} </h3>
            <h3> ID: {id} </h3>
            <p>Lorem ipsum dolor sit, amcusamus</p>
        </div>
    )
}

export default ItemDetail