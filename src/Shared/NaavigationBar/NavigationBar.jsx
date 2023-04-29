import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProviders.jsx/AuthProviders";
import { useContext } from "react";

const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Container>
      <Navbar bg="light" variant="light" expand="lg">
        {/* <Container> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto fw-bold">
            <Link to={"/category/0"}>Home</Link>
            <Nav.Link>About</Nav.Link>
            <Nav.Link>Career</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav className="fw-bold">
          {user && <FaUserCircle style={{ fontSize: "2rem" }}></FaUserCircle>}

          {user ? (
            <Button onClick={handleLogOut} className="btn btn-primary">
              LogOut
            </Button>
          ) : (
            <Link to={"/login"}>
              <Button className="btn btn-primary">Login</Button>
            </Link>
          )}
        </Nav>
        {/* </Container> */}
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
