import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import {
 
  Navbar,
  Row,
  Col,
  NavDropdown,
  Nav,
  Form,
} from "react-bootstrap";

import heart from "../images/heart.jpg";
import icon from "../images/favicon.ico";

export const Heart = () => {
  const [age, setAge] = useState();
  const [gender, setGender] = useState();
  const [cp, setCp] = useState();
  const [trestbps, setTrestbps] = useState();
  const [chol, setChol] = useState();
  const [fbs, setFbs] = useState();
  const [restecg, setRestecg] = useState();
  const [thalach, setThalach] = useState();
  const [exang, setExang] = useState();
  const [oldpeak, setOldpeak] = useState();
  const [slope, setSlope] = useState();
  const [ca, setCa] = useState();
  const [thal, setThal] = useState();
  const [result, setResult] = useState([]);
  

  const submit = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("age", parseInt(age));
    formdata.append("gender", parseInt(gender));
    formdata.append("cp", parseInt(cp));
    formdata.append("trestbps", parseInt(trestbps));
    formdata.append("chol", parseInt(chol));
    formdata.append("fbs", parseInt(fbs));
    formdata.append("restecg", parseInt(restecg));
    formdata.append("thalach", parseInt(thalach));
    formdata.append("exang", parseInt(exang));
    formdata.append("oldpeak", parseInt(oldpeak));
    formdata.append("slope", parseInt(slope));
    formdata.append("ca", parseInt(ca));
    formdata.append("thal", parseInt(thal));
    console.log(formdata, "hello");
    await axios
      .post("https://hearthealthclub.herokuapp.com/predict", formdata)
      .then((res) => {
        setResult(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

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
              <NavDropdown
                title="Heart Disease "
                className="dropdown"
                id="basic-nav-dropdown"
              >
               
                <NavDropdown.Item href="/Diabetes">Diabetes</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/Healthy">Healthy Living</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div>
        <img className="disease-img" src={heart} alt="logo" />
        <p className="disease-content">
          Heart disease is the leading cause of death in the United States,
          according to the Centers for Disease Control and Prevention
          (CDC)Trusted Source. In the United States, 1 in every 4 deaths in is
          the result of a heart disease. That’s about 610,000 people who die
          from the condition each year. Heart disease doesn’t discriminate. It’s
          the leading cause of death for several populations, including white
          people, Hispanics, and Black people. Almost half of Americans are at
          risk for heart disease, and the numbers are rising. Learn more about
          the increase in heart disease rates. While heart disease can be
          deadly, it’s also preventable in most people. By adopting healthy
          lifestyle habits early, you can potentially live longer with a
          healthier heart.This is a problem with the blood vessels that deliver
          blood to the heart muscle. If these blood vessels get very small, or
          if they become blocked, blood cannot flow through them normally. Since
          less blood is supplied to the heart muscle, the muscle cannot work at
          normal capacity. The heart muscle can become sick and weak.
        </p>
      </div>
      <div className="heart-symptoms">
        <h2>Signs and symptoms can include:</h2>
        <ul>
          <li>
            Chest pain, chest tightness, chest pressure and chest discomfort
            (angina)
          </li>
          <li>Shortness of breath</li>
          <li>Pain, numbness, weakness or coldness in your legs or arms</li>
          <li>Pain in the neck, jaw, throat, upper abdomen or back</li>
        </ul>
        <h2>Causes:</h2>
        <ul>
          <li>
           High intake of Alcohol
          </li>
          <li>Diabetes</li>
          <li>High Cholesterol</li>
          <li>Overweight and Obesity</li>
          <li>High Stress and Anxiety levels</li>
        </ul>
        <h2>Prevention:</h2>
        <ul>
          <li>Quitting Smoking</li>
          <li>Controlling Blood pressure</li>
          <li>Exercising Regularly</li>
          <li>Maintaining Healthy Cholesterol levels</li>
          <li>Losing weight if you’re overweight</li>
          <li>Eating Healthy</li>
        </ul>
      </div>
      <div className="form">
        <h2>Heart Disease Prediction</h2>

        <Form.Group as={Row} controlId="formPlaintext">
          <Form.Label column sm="2">
            Age
          </Form.Label>
          <Col sm="10">
            <Form.Control
              onChange={(e) => setAge(e.target.value)}
              name="age"
              placeholder="What's your age?"
              value={age}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formPlaintext">
          <Form.Label column sm="2">
            Gender
          </Form.Label>
          <Col sm="10">
            <Form.Control
              onChange={(e) => setGender(e.target.value)}
              name="gender"
              type="text"
              placeholder="What's your gender?"
              value={gender}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            CP
          </Form.Label>
          <Col sm="10">
            <Form.Control
              onChange={(e) => setCp(e.target.value)}
              name="CP"
              type="text"
              placeholder="What's your CP?"
              value={cp}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Trestbps
          </Form.Label>
          <Col sm="10">
            <Form.Control
              onChange={(e) => setTrestbps(e.target.value)}
              name="Trestbps"
              type="text"
              placeholder="What's your Trestbps?"
              value={trestbps}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Chol
          </Form.Label>
          <Col sm="10">
            <Form.Control
              onChange={(e) => setChol(e.target.value)}
              name="Chol"
              type="text"
              placeholder="What's your Chol?"
              value={chol}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            FBS
          </Form.Label>
          <Col sm="10">
            <Form.Control
              onChange={(e) => setFbs(e.target.value)}
              name="FBS"
              type="text"
              placeholder="What's your FBS?"
              value={fbs}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            RestECG
          </Form.Label>
          <Col sm="10">
            <Form.Control
              onChange={(e) => setRestecg(e.target.value)}
              name="RestECG"
              type="text"
              placeholder="What's your  RestECG?"
              value={restecg}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Thalach
          </Form.Label>
          <Col sm="10">
            <Form.Control
              onChange={(e) => setThalach(e.target.value)}
              name="Thalach"
              type="text"
              placeholder="What's your  Thalach?"
              value={thalach}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Exang
          </Form.Label>
          <Col sm="10">
            <Form.Control
              onChange={(e) => setExang(e.target.value)}
              name="Exang"
              type="text"
              placeholder="What's your Exang?"
              value={exang}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            OldPeak
          </Form.Label>
          <Col sm="10">
            <Form.Control
              onChange={(e) => setOldpeak(e.target.value)}
              name="OldPeak"
              type="text"
              placeholder="What's your OldPeak?"
              value={oldpeak}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Slope
          </Form.Label>
          <Col sm="10">
            <Form.Control
              onChange={(e) => setSlope(e.target.value)}
              name="Slope"
              type="text"
              placeholder="What's your Slope?"
              value={slope}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            CA
          </Form.Label>
          <Col sm="10">
            <Form.Control
              onChange={(e) => setCa(e.target.value)}
              name="CA"
              type="text"
              placeholder="What's your CA?"
              value={ca}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Thal
          </Form.Label>
          <Col sm="10">
            <Form.Control
              onChange={(e) => setThal(e.target.value)}
              name="Thal"
              type="text"
              placeholder="What's your Thal?"
              value={thal}
            />
          </Col>
        </Form.Group>
        <button type="button" class="btn btn-outline-primary" onClick={submit}>
          Predict
        </button>

        
      </div>
      <h2 className="result">{result["Prediction"]}</h2>
    </div>
  );
};

export default Heart;
