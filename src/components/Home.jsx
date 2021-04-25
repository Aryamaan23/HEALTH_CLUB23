import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  
  Navbar,
  Nav,
  NavDropdown,

  Carousel,
} from "react-bootstrap";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

import home from "../images/home.jpg";
import exercise from "../images/exercise.jpeg";
import food from "../images/food.jpeg";
import sleep from "../images/sleep.jpeg";
import cando from "../images/cando.jpeg";
import calorie from "../images/calorie.jpg";
import icon from "../images/favicon.ico";

function Home() {
  return (
    <>
      <div className="navcolor">
        <Navbar expand="lg">
          <Navbar.Brand ><Nav.Link className="club" href="/">Health Club</Nav.Link></Navbar.Brand>
          <img src={icon} alt=""></img>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto ">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/About">About</Nav.Link>
              <NavDropdown title="Disease Prediction" id="basic-nav-dropdown">
                
                <NavDropdown.Item href="/Heart">Heart Disease</NavDropdown.Item>
                
                <NavDropdown.Item href="/Diabetes">Diabetes</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/Healthy">Healthy Living</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>

      <div className="carousel">
        <Carousel fade>
          <Carousel.Item>
            <img className="d-block w-100" src={home} alt="First slide" />
            <Carousel.Caption>
              <h3>5 Simple Tips for Fitness Success </h3>
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

        <h1 className="health">
          Why You Should Take Care of Your Body and Health ?</h1>
        <p className="content">
          Health problems, even minor ones, can interfere with or even
          overshadow other aspects of your life. Even relatively minor health
          issues such as aches, pains, lethargy, and indigestion take a toll on
          your happiness and stress levels. One way to improve your ability to
          cope with stress and feel better is to make a commitment to healthier
          habits.
        </p>

        <p className="content">
          Poor health habits can add stress to your life and also play a role in
          how well you are able to cope with stress. The stress that comes from
          poor health is significant. Health challenges also affect other areas
          of your life. Health problems can make daily tasks more challenging,
          create financial stress, and even jeopardize your ability to earn a
          living.{" "}
        </p>

        <p className="content">
          Stress itself can exacerbate health issues from the common cold to
          more serious conditions and diseases, so maintaining healthy habits
          can pay off in the long run.
        </p>
        <ul>
       <li><h3 className="pt">Eat a Healthy Diet</h3></li> 
        <p className="content">
          Rather than eating right solely for the promise of looking better in
          your jeans, you should also make a commitment to eating foods that
          will boost your energy levels and keep your system running smoothly.
          This is because what you eat can not only impact your short-term and
          long-term health, it can affect your stress levels.Eating well has
          important long-term consequences, but it may also help you feel more
          energetic and optimistic in the short-term as well.
        </p>

        </ul>
       
        <ul>
          <li> <h3 className="pt">Make Sleep a Priority</h3></li>
        <p className="content">
          Sleep can have a serious impact on your overall health and well-being.
          Make a commitment to get enough sleep at night. If you haven't gotten
          adequate sleep, you may be less productive, less mentally sharp, and
          otherwise more prone to the effects of stress.
        </p>
        </ul>
        
        <ul>
          <li><h3 className="pt">Keeping the track on your calorie</h3></li>
        <p className="content">
          Avoid putting unhealthy substances into your body; nicotine, excess
          alcohol, and even excessive caffeine can take a toll on your health in
          the long run, but also make you feel lousy overall in your day-to-day
          life. In fact, it helps if you can avoid allowing toxic thinking
          patterns from exacerbating your stress levels as well.
        </p>
        </ul>
       
        <ul>
        <li><h3 className="pt">Exercise Daily</h3></li> 
        <p className="content">
          A healthy lifestyle demands regular exercise, and it is an integral
          part of being fit. Study after study has shown us the various benefits
          it can have. Not only does regular exercise help you reduce your risk
          of developing diseases and manage your weight, but it can also help
          prevent and treat mental health problems. Exercise is a great way to
          unwind from the stresses of life and can boost your wellbeing and
          mood. No matter what one’s age, everyone gets benefitted from regular
          exercise.
        </p>
        </ul>
      </div>
      <div className="footer">
        <MDBFooter
          color="blue-grey"
          className="page-footer font-small lighten-5 pt-0"
        >
          <div style={{ backgroundColor: "#0d8bc5" }}>
            <MDBContainer>
              <MDBRow className="py-4 d-flex align-items-center">
                <MDBCol
                  md="6"
                  lg="5"
                  className="text-center text-md-left mb-4 mb-md-0"
                ></MDBCol>
               
              </MDBRow>
            </MDBContainer>
          </div>
         
          <div className="footer-copyright text-center  py-3 ">
            <MDBContainer fluid>
              &copy; {new Date().getFullYear()} <br/>MADE WITH ❤️ BY SOUL CODERS
            </MDBContainer>
          </div>
        </MDBFooter>
      </div>
      
    </>
  );
}

export default Home;
