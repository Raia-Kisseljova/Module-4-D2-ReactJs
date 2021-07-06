import { Navbar, Nav, Container } from 'react-bootstrap'


const MyNavbar = () => (
    <Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="ml-auto">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Browse</a>
            </Nav>
        </Container >
    </Navbar >
)

export default MyNavbar