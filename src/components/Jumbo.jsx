import { Container, Row, Col } from "react-bootstrap";

const Jumbo = () => {
    return (
        <div className="jumbotron">
            <div className="row" >
                <Col xs={12} md={12}>
                    <h1>Book Shop</h1>
                    <button className="btn btn-primary">Shop now</button>
                </Col>
            </div>
        </div>
    )
}


export default Jumbo