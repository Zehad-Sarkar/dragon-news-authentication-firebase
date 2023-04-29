import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import first from '../../../../public/images/1.png'
import second from '../../../../public/images/2.png'
import third from '../../../../public/images/3.png'

const EditorsInsight = () => {
  return (
    <Row xs={1} md={2} lg={3} className="g-4">
      <Col>
        <Card>
          <Card.Img variant="top" src={first} />
          <Card.Body>
            <Card.Title>Title</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below...
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default EditorsInsight;
