import { useContext } from "react";
import { Navbar, Container, Nav, Form } from "react-bootstrap";
import { Link } from 'react-router-dom';
import ThemeContext from "./ThemeContext";


function Header() {

    const { theme, setTheme } = useContext(ThemeContext);

    const handleChange = event => {
        if (event.target.checked) {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    };

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
                    <Navbar.Text>
                        <Form className="d-flex">
                            <Form.Check
                                onChange={handleChange}
                                type="switch"
                                id="custom-switch"
                                label="Dark"
                            />
                        </Form>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}

export default Header;



