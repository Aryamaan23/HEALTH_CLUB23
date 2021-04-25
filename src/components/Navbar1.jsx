import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {

  Navbar,
  Nav,
  NavDropdown,
  
  Carousel,
} from "react-bootstrap";

import img1 from "../images/image1.jpeg";
import exercise from "../images/exercise.jpeg";
import food from "../images/food.jpeg";
import sleep from "../images/sleep.jpeg";
import cando from "../images/cando.jpeg";
import calorie from "../images/calorie.jpeg";
import icon from "../images/favicon.ico";

function Navbar1() {
  return (
    <>
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
                title="Disease Prediction"
                className="dropdown"
                id="basic-nav-dropdown"
              >
                
                <NavDropdown.Item href="#action/3.2">
                  Heart Disease
                </NavDropdown.Item>
               
                <NavDropdown.Item href="#action/3.4">Diabetes</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/Healthy">Healthy Living</Nav.Link>
              
            </Nav>
            <div className="button">
             
            </div>
          </Navbar.Collapse>
        </Navbar>
      </div>

      <div className="carousel">
        <Carousel fade>
          <Carousel.Item>
            <img className="d-block w-100" src={img1} alt="First slide" />
            <Carousel.Caption>
              <h3>5 Simple Tips for Fitness Success</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={exercise} alt="Second slide" />

            <Carousel.Caption>
              <h3>Exercise Daily</h3>
              <p>
                Exercise daily for at least an hour. You do not have to kill
                yourself from running, jogging, etc., but you should have some
                sort of moderate physical activity in your everyday life.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={food} alt="Third slide" />

            <Carousel.Caption>
              <h3>Eat the Right Foods and Portion Each Meal</h3>
              <p>
                Fruits and vegetables are the best thing to eat when getting
                into shape. Apples, for example, do a good job at making the
                stomach feel full for up to 3 to 4 hours. Green vegetables such
                as green beans and broccoli keep the digestive system clean and
                running
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={calorie} alt="First slide" />
            <Carousel.Caption>
              <h3>Keep Track of Calories and Food Intake Per Day</h3>
              <p>
                Keeping track of how many calories you eat in a day will be
                helpful in planning out your physical exercising.
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={sleep} alt="First slide" />
            <Carousel.Caption>
              <h3>Be Sure to Get Sleep</h3>
              <p>
                Even though most of us have eight-hour jobs during the day or
                night, it is crucial to get enough sleep to recharge the body's
                batteries. Six to eight hours of sleep will keep the body going
                throughout the day
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={cando} alt="First slide" />
            <Carousel.Caption>
              <h3>Stay Motivated</h3>
              <p>
                An important key to being in shape is to set goals and keep a
                positive mindset. If you stay positive, you will be able to push
                yourself to get that fit body you've always wanted.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default Navbar1;
