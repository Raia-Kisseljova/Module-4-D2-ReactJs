import { Navbar, Nav, Container } from 'react-bootstrap'


const MyNavbar = () => (
    <Navbar >
        <div className="container-fluid nav-nav">
            <Navbar.Brand href="#home">Strive-Book-Store</Navbar.Brand>
            <Nav className="ml-auto">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Browse</a>
            </Nav>
        </div >
    </Navbar >
)

export default MyNavbar