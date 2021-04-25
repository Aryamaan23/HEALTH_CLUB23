import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Row,
  Card,
  Col,
  Navbar,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import logo from "../images/logo.jpg";
import icon from "../images/favicon.ico";
import udain from "../images/udain.jpg";
import harsh from "../images/harsh.jpg";
import saurabh from "../images/saurabh.png";
import madhavendra from "../images/madhavendra.png";
import aryamaan from "../images/aryamaan.png"

const About = () => {
  return (
    <div>
      <div className="navcolor">
        <Navbar expand="lg">
        <Navbar.Brand ><Nav.Link className="club" href="/">Health Club</Nav.Link></Navbar.Brand>
          <img src={icon} alt=""></img>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <NavDropdown title="Disease Prediction" id="basic-nav-dropdown">
                
                <NavDropdown.Item href="/Heart">Heart Disease</NavDropdown.Item>
               
                <NavDropdown.Item href="/Diabetes">Diabetes</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/Healthy">Healthy Living</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div className="about">
        <p>
          <img className="logo" src={logo} alt="logo" />
          Over sixty percent of our health is determined by social needs like
          access to food, jobs, childcare, and housing. Right now, the way
          healthcare organizations address these problems is broken. We believe there is more to health than healthcare and we’re
          fundamentally rethinking how healthcare organizations and communities
          work together to help people thrive. We came up with the solution that
          everyone should be able to keep a check on his/her health
          We know how a disease inflicts pain to a human body, which is why we
          work so hard to get accurate predictions and support you. As a team we
          have blended the ingredients of a great user experience and a swift
          prediction system which might help save lives.During the pandemic it
          was observed that patients suffering from coronary diseases couldn't
          visit the hospitals due to various reasons.
        </p>
      </div>
      <section id="team">
        <h2 className="team"> Meet Our Team</h2>

        <Row>
          <Col xs={6} md={4}>
            <Card style={{ width: "18rem"}}>
              <Card.Img variant="top" src={udain} />
              <Card.Body>
                <Card.Title>Udain Srivastava</Card.Title>
                <Button variant="primary" href="https://github.com/Udain123">
                  GITHUB
                </Button>
                <Button
                  variant="primary"
                  href="https://www.linkedin.com/in/udain-srivastava-6ba848168"
                >
                  LINKEDIN
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={4}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={harsh} />
              <Card.Body>
                <Card.Title>Harsh Choubey</Card.Title>
                <Button
                  variant="primary"
                  href="https://github.com/iamharsh1312"
                >
                  GITHUB
                </Button>
                <Button
                  variant="primary"
                  href="www.linkedin.com/in/harsh-choubey-12952518b"
                >
                  LINKEDIN
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={4}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={saurabh} />
              <Card.Body>
                <Card.Title>Saurabh Dua</Card.Title>

                <Button variant="primary">GITHUB</Button>
                <Button
                  variant="primary"
                  href="https://www.linkedin.com/in/saurabh-dua-75766b18b/"
                >
                  LINKEDIN
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={6} >
           
            <Card style={{ width: "18rem", margin:"5rem" }}>
              <Card.Img variant="top" src={madhavendra}  />
              <Card.Body>
                <Card.Title>Madhavendra Srivastava</Card.Title>

                <Button
                  variant="primary"
                  href="https://github.com/Madhavendra21"
                >
                  GITHUB
                </Button>
                <Button
                  variant="primary"
                  href="https://www.linkedin.com/in/madhavendra-srivastava-20753818b"
                >
                  LINKEDIN
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6}>
            {" "}
            <Card style={{ width: "18rem", margin:"5rem"}}>
              <Card.Img variant="top" src={aryamaan} />
              <Card.Body>
                <Card.Title>Aryamaan Pandey</Card.Title>

                <Button variant="primary" href="https://github.com/Aryamaan23">GITHUB</Button>
                <Button variant="primary" href="https://www.linkedin.com/in/aryamaan-pandey-1710401b2">LINKEDIN</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default About;
