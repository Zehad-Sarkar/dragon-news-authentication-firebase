import React from "react";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import RightNav from "../Shared/RightNav/RightNav";
import { Outlet } from "react-router-dom";

const NewsLayouts = () => {
  return (
    <div>
      <Header></Header>

      <Container>
        <Row>
          <Col lg={9}>
            <Outlet />
          </Col>

          <Col lg={3}>
            <RightNav>
              <h1>right</h1>
            </RightNav>
          </Col>
        </Row>
      </Container>

      <Footer></Footer>
    </div>
  );
};

export default NewsLayouts;
