import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'


const MyNavbar = (props) => (
    <Navbar >
        <div className="container-fluid nav-nav">
            <Navbar.Brand href="#home">Strive-Book-Store</Navbar.Brand>
            <Nav className="ml-auto">
                <Link to='/'><a href="#">Home</a></Link>
                <Link to='/about'><a href="#">About</a></Link>
                <Link to='/register'><a href="#">Sign up</a></Link>
            </Nav>
        </div >
    </Navbar >
)

export default MyNavbar