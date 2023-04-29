import React, { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders.jsx/AuthProviders";
import { useState } from "react";

const Register = () => {

  const { createUser } = useContext(AuthContext);
  const [accepted,setAccepted]=useState(false)

  const handleRegister = (event) => {
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    // console.log(name, email,password,photo);

    createUser(email, password)
      .then(result => {
        const createdUser = result.user;
        console.log(createdUser);
      })
      .catch(error => {
      console.log(error);
    })
  }

  const handledAccepted = (event) => {
    setAccepted(event.target.checked);
  }

  return (
    <Container className="w-25">
      <h2>Please Register</h2>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter your name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhoto">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control
            type="text"
            name="photo"
            placeholder="Enter your photo"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            onClick={handledAccepted}
            type="checkbox"
            name="accept"
            label={
              <>
                accept <Link to='/terms'>term and condition</Link>
              </>
            }
          />
        </Form.Group>

        <Button variant="primary" type="submit" disabled={!accepted}>
          Register
        </Button>

        <br />
        <Form.Text className="text-secondary">
          Allready have an account?
          <Link to="/login">
            <span>login</span>
          </Link>
        </Form.Text>
        <br />
        <Form.Text className="text-success">error</Form.Text>
        <Form.Text className="text-danger">error</Form.Text>
      </Form>
    </Container>
  );
};

export default Register;
