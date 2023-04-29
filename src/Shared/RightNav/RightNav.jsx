import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import QZone from "../QZone/QZone";
import bg from '../../../public/images/bg.png'

const RightNav = () => {
  return (
    <div>
      <h4>Login with</h4>
      <Button className="mb-2" variant="primary">
        <FaGoogle /> Login with Google
      </Button>
      <Button variant="secondary">
        <FaGithub /> Login with Github
      </Button>
      <div className="">
        <h3>Find us on</h3>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebook /> Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter />
            Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram />
            Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <QZone />
      <div className="position-relative text-light">
        <img src={bg} alt="" />
        <div className="position-absolute top-0 end-0 p-4">
          <h2>Create an Amazing Newspaper</h2>
          <p>
            Discover thousands of options, easy to customize layouts, one-click
            to import demo and much more.
          </p>
          <button className="btn btn-danger d-flex justify-content-center mx-auto">learn more</button>
        </div>
      </div>
    </div>
  );
};

export default RightNav;
