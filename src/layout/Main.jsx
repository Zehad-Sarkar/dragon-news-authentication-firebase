import React from "react";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import LeftNav from "../Shared/LeftNav/LeftNav";
import RightNav from "../Shared/RightNav/RightNav";
import { Outlet } from "react-router-dom";
import NavigationBar from "../Shared/NaavigationBar/NavigationBar";

const Main = () => {
  return (
    <div>
      <Header></Header>
    <NavigationBar></NavigationBar>
      <Container>
        <Row>
          <Col lg={3}>
            <LeftNav>
              {/* <h1>left</h1> */}
            </LeftNav>
          </Col>

          <Col lg={6}>
           <Outlet/>
          </Col>

          
          <Col lg={3}>
            <RightNav>
              {/* <h1>right</h1> */}
            </RightNav>
          </Col>
        </Row>
      </Container>

      <Footer></Footer>
    </div>
  );
};

export default Main;
