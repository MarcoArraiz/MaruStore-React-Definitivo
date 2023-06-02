import './ItemDetail.css'

const ItemDetail = ({ id, nombre, precio, img }) => {
    return (
        <div class=" container-fluid card mb-3" style={{ width: '600px' }}>
            <img src= {img} class="card-img-top" alt= {nombre} />
                <div class="card-body">
                    <h5 class="card-title"> {nombre} </h5>
                    <p class="card-text"> {precio} </p>
                    <p class="card-text"> {id} </p>
                </div>
        </div>
    )
}

export default ItemDetail