import { Container, Nav, Navbar, Button, NavDropdown, Form, FormControl } from "react-bootstrap";
import Logo from '../../assets/icons/dotsMenu.png';
import LogoSmall from '../../assets/icons/menu.png';



export default function NavBar() {
    return (
        <>
            <Container fluid>
                <Navbar bg="light" expand="lg" fixed="top">
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={Logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                    </Navbar.Brand>
                    <Navbar.Brand href="#home">Microsoft Teams</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                        <Nav className="mr-auto">
                            <Navbar.Brand href="#home">
                                <img
                                    alt=""
                                    src={LogoSmall}
                                    width="30"
                                    height="30"
                                    className="d-inline-block align-top"
                                />{' '}
                            </Navbar.Brand>

                            <NavDropdown title="Microsoft" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Microsoft (Guest)</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.2">Saved</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.3">Manage Account</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Teams for personal use</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>

                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </>
    )
}