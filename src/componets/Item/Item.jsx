
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
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Link to={`/item/${id}`}>Ver Detalles</Link>
            </Card.Body>
        </Card>
    );
}

export default Item;