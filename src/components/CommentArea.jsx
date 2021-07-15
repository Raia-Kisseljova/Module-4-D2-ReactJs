import { useState } from "react";
import { useEffect } from "react";
import { Container, Row } from "react-bootstrap";




function CommentArea() {
    const [data, setData] = useState([])
    const [showWindow, setShowWindow] = useState(false)

    useEffect(() => {
        const fetchComments = async () => {

            let response = await fetch('https://striveschool-api.herokuapp.com/api/comments/', {
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjOWFjYmIzNTgxNzAwMTVjMjI3ZDQiLCJpYXQiOjE2MjYxMDYyODIsImV4cCI6MTYyNzMxNTg4Mn0.yWcj2-yj5CTj_tVKvHWKLgBOyc-hzGcm2FlSJmFzBa4"
                }
            })
            let singleComment = await response.json()
            setData(singleComment)
            console.log("my data")
            console.log(singleComment);
        }
        fetchComments()
    }, [])

    return (
        // className={showWindow ? 'd-block' : 'd-none'}
        <Container className="comment-container d-none" >
            <Row>
                <div className="title-section">
                    <h1 className="text-center">Book title</h1>
                </div>

                <div className="comment-title">
                    <h2 className="text-center">Comments</h2>
                </div>
                <div className="comment-section">
                    {data.map(item => (<div key={item._id} className="comments"><p>{item.comment}</p></div>))}
                </div>
            </Row>
        </Container >

    )

}


export default CommentArea