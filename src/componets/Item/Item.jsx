import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Item({ id, nombre, precio, img }) {
    return (

        <Card className="cardProducto container" style={{ width: '16rem' }}>
            <Card.Img variant="top" src={img} alt={nombre} />
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <p class="card-text">Precio: {precio}</p>
                <p class="card-text">ID: {id}</p>
                <Card.Text class="card-text">
                    Descripcion
                </Card.Text>
                <Link class="btn btn-dark" to={`/item/${id}`}>Ver Detalles</Link>
            </Card.Body>
        </Card>
    );
}

export default Item;