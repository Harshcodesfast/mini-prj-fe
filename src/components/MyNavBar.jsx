import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function MyNavbar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container className="d-flex justify-content-between">
        <Navbar.Brand>Employee Management System</Navbar.Brand>
        <Nav className="ms.auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
            About
          </Nav.Link>
          <Nav.Link as={Link} to="/emplist">
            List Employee
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
