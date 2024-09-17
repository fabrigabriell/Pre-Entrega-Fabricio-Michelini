import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import "../../App.css";
import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";

function MyNav() {
  return (
    <header>
      <Navbar expand="lg" className="navbar-custom fixed-top">
        <Container>
          <Link className="blinking-title" to="/">
            GameHive
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <li style={{ display: "inline-block", marginRight: "20px" }}>
                <NavLink
                  to="/plataforma/PC"
                  className={({ isActive }) =>
                    isActive ? "link active" : "link"
                  }
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Pc
                </NavLink>
              </li>
              <li style={{ display: "inline-block", marginRight: "20px" }}>
                <NavLink
                  to="/plataforma/Xbox"
                  className={({ isActive }) =>
                    isActive ? "link active" : "link"
                  }
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Xbox
                </NavLink>
              </li>
              <li style={{ display: "inline-block" }}>
                <NavLink
                  to="/plataforma/PlayStation"
                  className={({ isActive }) =>
                    isActive ? "link active" : "link"
                  }
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Playstation
                </NavLink>
              </li>
            </Nav>
            <Nav className="ms-auto">
              <CartWidget />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default MyNav;
