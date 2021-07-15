import { Row, Card } from 'react-bootstrap';


const DisplayRelease = (props) => {
    return (
        <div className="container">
            <h2 className="my-3">Latest release</h2>
            <Row xs={4} md={6} lg={6}>

                {
                    props.horrorProp.map(book =>
                        <Card className="card-book" onClick={() => props.history.push('/about/' + book.asin)} key={book.asin} >
                            <Card.Img src={book.img} className="book-image" />
                            <Card.Header className="header-book">{book.title}</Card.Header>
                        </Card>
                    ).splice(0, 48)

                }
            </Row>
        </div >


        // onClick={() => props.setShowComments()}

    )

}

export default DisplayRelease


