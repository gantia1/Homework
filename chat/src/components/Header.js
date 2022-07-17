import { useContext } from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import UserContext from "./userContext";

function Header() {


    const { user } = useContext(UserContext);

    const logout = () => {
        localStorage.removeItem('token');
        window.location.reload();
    }

    return (
        <Container>
            <Navbar expand="lg" variant="dark" bg="dark">
                <Container>
                    <Navbar.Brand>{user.firstName} {user.lastName}</Navbar.Brand>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <Button variant="dark" onClick={logout}>Logout</Button>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    )
}
export default Header;



