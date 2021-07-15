import { Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import { Alert } from "bootstrap";
import { useHistory } from "react-router-dom";

const Registration = () => {

    const [formField, setField] = useState({
        name: " ",
        surname: " ",
        email: " ",
        password: " ",
        passwordRepeat: " "
    })

    const handleInput = ([key], formValue) => {
        setField({
            ...formField,
            [key]: formValue,
        })
    }


    const onSubmit = (e) => {
        e.preventDefault()
        console.log(e)
        if (formField.password === formField.passwordRepeat) {
            console.log("success")
            console.log()
        } else {
            console.log("not good")
        }
    }

    return (
        <Container>
            <Row>
                <Col>
                    <div >

                        <form onSubmit={onSubmit} className="form-container">
                            <h3>Registration</h3>
                            <input required minLength="2" type="text" placeholder="Name" id="name" onChange={(e) => handleInput(["name"], e.target.value)} />
                            <input required minLength="3" type="text" placeholder="Surname" id="surname" onChange={(e) => handleInput(['surname'], e.target.value)} />
                            <input type="email" placeholder="Email" id="email" onChange={(e) => handleInput(['email'], e.target.value)} />
                            <input type="password" required minLength="8" placeholder="Password" id="password" onChange={(e) => handleInput(['password'], e.target.value)} />
                            <input type="password" required minLength="8" placeholder="Repeat password" id="password-repeat" onChange={(e) => handleInput(['passwordRepeat'], e.target.value)} />
                            <button type="submit" onClick={(e) => onSubmit}>Submit</button>
                        </form>
                    </div>
                </Col>
            </Row>
        </Container>
    )



}





export default Registration