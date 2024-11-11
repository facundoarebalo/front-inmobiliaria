import { Navbar, Nav, Container } from 'react-bootstrap'
import logo from '../../assets/img/logo.jpg'
import { useNavigate } from 'react-router-dom'
import './navStyle.css'
const Navegador = () => {
    const navigate = useNavigate()

    return (
        <Navbar expand="lg" className="bg-body-tertiary shadow-sm sticky-top">
            <Container>
                <Navbar.Brand className='logo' onClick={() => navigate("/")}>
                    <img
                        src={logo}
                        alt="Logo"
                        className="d-inline-block align-top"
                        width="30"
                        height="30"
                    />{' '}
                    Spaces Inmobiliaria
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav d-flex">
                    <Nav className="me-auto">
                        <Nav.Link className='mx-md-4 text-center' onClick={() => navigate("*")}>Alquileres</Nav.Link>
                        <Nav.Link className='mx-md-4 text-center' onClick={() => navigate("/contacto")} >Contacto</Nav.Link>
                        <Nav.Link className='mx-md-4 text-center' onClick={() => navigate("/about")}>Sobre Nosotros</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navegador
