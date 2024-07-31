import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../../App.css"; // Asegúrate de que la ruta del archivo CSS sea correcta

function MyNav() {
  return (
    <header>
      <Navbar expand="lg" className="navbar-custom fixed-top">
        <Container>
          <Navbar.Brand href="#home" className="blinking-title">GameHive</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Inicio</Nav.Link>
              <Nav.Link href="#link">Catalogo</Nav.Link>
              <NavDropdown title="Sobre Nosotros" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">¿Quienes Somos?</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">¿Donde Estamos?</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Medios de Pagos</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default MyNav;
