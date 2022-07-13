import { useContext } from "react";
import { Navbar, Container, Nav, Form, NavDropdown } from "react-bootstrap";
import { Link } from 'react-router-dom';
import ThemeContext from "./ThemeContext";
import UserContext from "./UserContext";


function Header() {

    const { theme, setTheme } = useContext(ThemeContext);
    const { user } = useContext(UserContext);

    const handleChange = event => {
        if (event.target.checked) {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        window.location.reload();
    }
    return (

        <Navbar bg={theme} variant={theme} expand="md">
            <Container>
                <Navbar.Brand as={Link} to="/">Navbar</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/posts">Posts</Nav.Link>
                        <Nav.Link as={Link} to="/todo">Todos</Nav.Link>
                    </Nav>
                    <Navbar.Text className="me-5">
                        <Form className="d-flex">
                            <Form.Check
                                onChange={handleChange}
                                type="switch"
                                id="custom-switch"
                                label="Dark"
                            />
                        </Form>
                    </Navbar.Text >
                    <NavDropdown title={`Signed in as: ${user.username}`}>
                        <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                    </NavDropdown>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}

export default Header;
