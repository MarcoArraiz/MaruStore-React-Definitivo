import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Item( { id, nombre, precio, img } ) {
    return (
        
        <Card className="cardProducto" style={{ width: '16rem' }}>
            <Card.Img variant="top" src= {img} alt={nombre} />
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <p>Precio: {precio}</p>
                <p>ID: {id}</p>
                <Card.Text>
                    Descripcion
                </Card.Text>
                <Link class="btn btn-dark" to={`/item/${id}`}>Ver Detalles</Link>
            </Card.Body>
        </Card>
    );
}

export default Item;