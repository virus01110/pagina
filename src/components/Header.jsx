import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DarkModeSwitch from './DarkModeSwitch';

function Header() {
  const lights = Array.from({ length: 20 }).map((_, i) => <span key={i} className="light"></span>);

  return (
    <>
      <div className="christmas-lights">
        {lights}
      </div>
      <Navbar bg="danger" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">Fraternidad del espiritu santa maria modulo tapatio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Inicio</Nav.Link>
              <Nav.Link as={Link} to="/about">Sobre Nosotros</Nav.Link>
              <Nav.Link as={Link} to="/services">Servicios</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contacto</Nav.Link>
              <Nav.Link as={Link} to="/comments">Comentarios</Nav.Link>
            </Nav>
            <DarkModeSwitch />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
