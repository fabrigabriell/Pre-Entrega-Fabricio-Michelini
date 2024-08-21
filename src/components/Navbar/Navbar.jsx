import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Navbar.css"
import "../../App.css";
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';



function MyNav() {
  return (
    <header>
      <Navbar expand="lg" className="navbar-custom fixed-top">
        <Container>
          <Link className="blinking-title" to={"/"}>GameHive</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <li>
              <Link to="/plataforma/PC">Pc</Link>
              </li>

              <li>
              <Link to="/plataforma/Xbox">Xbox</Link>
              </li>

              <li>
              <Link to="/plataforma/PlayStation">Playstation</Link>
              </li>

            </Nav>
            <Nav className="ms-auto">
            <CartWidget/>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default MyNav;

