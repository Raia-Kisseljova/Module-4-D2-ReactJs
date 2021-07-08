import { Container, Col, Row, Card } from 'react-bootstrap';
import horror from '../Data/horror.json'


const DisplayRelease = () => {
    return (
        <Container>
            <Row xs={2} md={4} xl={6}>
                {
                    horror.map(book =>
                        <Card className="card-book">

                            <Card.Img src={book.img} className="book-image" />
                            <Card.Header className="header-book">{book.title}</Card.Header>
                        </Card>
                    ).splice(0, 24)
                }
            </Row>
        </Container>


    )
}


// I used dwhat about my cards ?
// BTw your editor is saving your project every second
export default DisplayRelease


