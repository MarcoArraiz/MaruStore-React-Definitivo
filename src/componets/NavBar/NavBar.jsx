import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import CartWidget from "../CartWidget/CartWidget";
import "../NavBar/NavBar.css"

function ColorSchemesExample() {
    return (
        
        <header>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href= {"/"}>MaruStore</Navbar.Brand>
                    <Nav className="me-auto">
                    <ul>
                        <li>
                            <NavLink to={`/categoria/1`}>GPU</NavLink>
                        </li>

                        <li>
                            <NavLink to={`/categoria/2`}>Teclados</NavLink>
                        </li>

                        <li>
                            <NavLink to={`/categoria/3`}>Procesadores</NavLink>
                        </li>

                        <li>
                            <NavLink to={`/categoria/4`}>Mouses</NavLink>
                        </li>
                    </ul>
                    </Nav>
                </Container>
            <CartWidget/>
            </Navbar>
        </header>
    );
}

export default ColorSchemesExample;