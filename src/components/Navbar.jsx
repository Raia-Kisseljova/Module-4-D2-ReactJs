import { Navbar, Nav, Container } from 'react-bootstrap'


const MyNavbar = () => (
    <Navbar bg="dark" variant="dark">
        <div className="container-fluid">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="ml-auto">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Browse</a>
            </Nav>
        </div >
    </Navbar >
)

export default MyNavbar