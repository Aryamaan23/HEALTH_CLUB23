import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Navbar, Row, Col, NavDropdown, Nav, Form } from "react-bootstrap";
import diabetes from "../images/diabetes.jpg";
import icon from "../images/favicon.ico";

export const Diabetes = () => {
  const [pregnancies, setPregnancies] = useState();
  const [glucose, setGlucose] = useState();
  const [bloodpressure, setBloodpressure] = useState();
  const [skinthickness, setSkinthickness] = useState();
  const [insulin, setInsulin] = useState();
  const [bmi, setBmi] = useState();
  const [dpf, setDpf] = useState();
  const [age, setAge] = useState();
  const [result, setResult] = useState([]);

  const submit = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("pregnancies", parseInt(pregnancies));
    formdata.append("glucose", parseInt(glucose));
    formdata.append("bloodpressure", parseInt(bloodpressure));
    formdata.append("skinthickness", parseInt(skinthickness));
    formdata.append("insulin", parseInt(insulin));
    formdata.append("bmi", parseInt(bmi));
    formdata.append("dpf", parseInt(dpf));
    formdata.append("age", parseInt(age));

    console.log(formdata, "hello");
    await axios
      .post("https://breastpredict231123.herokuapp.com/predict", formdata)
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
                title="Diabetes "
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
        <img className="disease-img" src={diabetes} alt="logo" />
        <p className="disease-content">
          Diabetes mellitus, commonly known as diabetes, is a metabolic disease
          that causes high blood sugar. The hormone insulin moves sugar from the
          blood into your cells to be stored or used for energy. With diabetes,
          your body either doesn’t make enough insulin or can’t effectively use
          the insulin it does make. Untreated high blood sugar from diabetes can
          damage your nerves, eyes, kidneys, and other organs. There are a few
          different types of diabetes: Type 1 diabetes is an autoimmune disease.
          The immune system attacks and destroys cells in the pancreas, where
          insulin is made. It’s unclear what causes this attack. About 10
          percent of people with diabetes have this type. Type 2 diabetes occurs
          when your body becomes resistant to insulin, and sugar builds up in
          your blood. Prediabetes occurs when your blood sugar is higher than
          normal, but it’s not high enough for a diagnosis of type 2 diabetes.
          Gestational diabetes is high blood sugar during pregnancy.
          Insulin-blocking hormones produced by the placenta cause this type of
          diabetes. A rare condition called diabetes insipidus is not related to
          diabetes mellitus, although it has a similar name. It’s a different
          condition in which your kidneys remove too much fluid from your body.
        </p>
      </div>
      <div className="diabetes-symptoms">
        <h2>Signs and symptoms can include:</h2>
        <ul>
          <li>Extreme hunger</li>
          <li>
            Presence of ketones in the urine
          </li>
          <li>Fatigue</li>
          <li>Unexplained weight loss</li>
        </ul>
        <h2>Causes:</h2>
        <ul>
          <li>Chemical toxins within food</li>
          <li>Family history of gestational diabetes</li>
          <li>
            Lack of equilibrium between levels of insulin and
            glucagon production
          </li>
          <li>Overweight and Obesity</li>
        </ul>
        <h2>Prevention:</h2>
        <ul>
          <li>Cut Sugar and Refined Carbs From Your Diet</li>
          <li>Quit Smoking </li>
          <li>Exercising Regularly</li>
          <li>
            Drinking water instead of other beverages
          </li>
          <li>Losing weight if you’re overweight</li>
        
        </ul>
      </div>
      <div className="form">
        <h2>Diabetes Prediction</h2>
        <Form.Group as={Row} controlId="formPlaintext">
          <Form.Label column sm="2">
            Pregnancies
          </Form.Label>
          <Col sm="10">
            <Form.Control
              onChange={(e) => setPregnancies(e.target.value)}
              name="pregnancies"
              placeholder="No of pregnancies ?"
              value={pregnancies}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formPlaintext">
          <Form.Label column sm="2">
            Glucose
          </Form.Label>
          <Col sm="10">
            <Form.Control
              onChange={(e) => setGlucose(e.target.value)}
              name="glucose"
              type="text"
              placeholder="What's your glucose value?"
              value={glucose}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            BloodPressure
          </Form.Label>
          <Col sm="10">
            <Form.Control
              onChange={(e) => setBloodpressure(e.target.value)}
              name="bloodpressure"
              type="text"
              placeholder="What's your BP?"
              value={bloodpressure}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            SkinThickness
          </Form.Label>
          <Col sm="10">
            <Form.Control
              onChange={(e) => setSkinthickness(e.target.value)}
              name="skinthickness"
              type="text"
              placeholder="What's your Skinthickness?"
              value={skinthickness}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Insulin
          </Form.Label>
          <Col sm="10">
            <Form.Control
              onChange={(e) => setInsulin(e.target.value)}
              name="insulin"
              type="text"
              placeholder="What's your Insulin value ?"
              value={insulin}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Bmi
          </Form.Label>
          <Col sm="10">
            <Form.Control
              onChange={(e) => setBmi(e.target.value)}
              name="Bmi"
              type="text"
              placeholder="What's your BMI?"
              value={bmi}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Dpf
          </Form.Label>
          <Col sm="10">
            <Form.Control
              onChange={(e) => setDpf(e.target.value)}
              name="Dpf"
              type="text"
              placeholder="What's your  Dpf?"
              value={dpf}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Age
          </Form.Label>
          <Col sm="10">
            <Form.Control
              onChange={(e) => setAge(e.target.value)}
              name="Age"
              type="text"
              placeholder="What's your  Age?"
              value={age}
            />
          </Col>
        </Form.Group>

        <button type="button" class="btn btn-outline-primary" onClick={submit}>
          Predict
        </button>
      </div>

      <h1 className="result">{result["Prediction"]}</h1>
    </div>
  );
};

export default Diabetes;
