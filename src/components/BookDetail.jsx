import { useState } from "react"
import { useEffect } from "react"
import { Badge, Col, Container, Row } from "react-bootstrap"
import bookArray from '../Data/horror.json'


const BookInfo = (props) => {

    const [book, setBook] = useState(null)
    console.log(props)
    useEffect(() => {
        console.log(props, "fck props")
        let bookAsin = props.match.params.asin
        console.log("book asin", bookAsin)
        let correctBook = bookArray.find(singleBook => singleBook.asin.toString() === bookAsin)
        console.log(correctBook, "correct?")
        if (correctBook) {
            setBook(correctBook)
        }
        else {
            <h1>NOT FOUND</h1>
        }
        console.log(correctBook)
    }, [])

    return (
        <Container>
            <Row>
                <Col md={6}>
                    {/* <img src={book.img} /> */}
                </Col>

                <Col md={4}>
                    <h3>
                        hello
                    </h3>
                    <Badge>
                        {/* Price : {book.price} */}
                    </Badge>
                    {/* <Badge>Category : {book.category}</Badge> */}

                </Col>



            </Row>



        </Container>
    )







}

export default BookInfo