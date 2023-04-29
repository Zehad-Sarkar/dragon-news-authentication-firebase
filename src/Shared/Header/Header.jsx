import React, { useEffect, useState } from "react";
import logo from "../../../public/images/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";
import { Button, Container } from "react-bootstrap";

const Header = () => {
  const [date, setDate] = useState(
    moment().format("dddd, MMMM D, YYYY, h:mm:ss a")
  );
  useEffect(() => {
    const timer = setInterval(() => {
      setDate(moment().format("dddd, MMMM D, YYYY, h:mm:ss a"));
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <Container>
      <div className="text-center">
        <img src={logo} alt="" />
        <p>
          <small>Journalism Without Fear or Favour</small>
        </p>
        {/* <p>{moment().format("dddd, MMMM D, YYYY, h:mm:ss a")}</p> */}
        <p>{date}</p>
      </div>
      <div className="d-flex">
        <Button variant="danger">Latest</Button>
        <Marquee className="text-danger" speed={75}>
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>
    </Container>
  );
};

export default Header;
