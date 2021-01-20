import { Navbar, Nav, Container } from "react-bootstrap";
const Header = () => {
  return (
    <>
      <Navbar bg="light" expand="lg" collapseOnSelect>
        <Container>
            <Navbar.Brand href="/">React Store</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Link href="/cart"><i class="fa fa-shopping-cart ml-1" aria-hidden="true"></i> Cart</Nav.Link>
                <Nav.Link href="/login"><i class="fa fa-user ml-1" aria-hidden="true"></i> Login</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
