import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import icon from "../images/favicon.ico";
import yoga1 from "../images/yoga1.jpg"
import yoga2 from "../images/yoga2.jpg"
import yoga3 from "../images/yoga3.jpg"
import yoga4 from "../images/yoga4.jpg"
import yoga5 from "../images/yoga5.jpg"
import yoga6 from "../images/yoga6.jpg"
import yoga7 from "../images/yoga7.jpg"
import yoga8 from "../images/yoga8.jpg"
import yoga9 from "../images/yoga9.jpg"


const healthy = () => {
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
      <div className="yoga">
        <h2 className="h" >9 simple Yoga poses to do Every Day</h2>
        <ul>
        <li><h3> Cat pose / Majaryasana</h3></li>
        <img className="yoga-img" src={yoga1} alt="logo"/>
        <p>
        
          This pose stretches the spine, back muscles and neck, stimulates blood
          flow in the wrists and increases the circulation of spinal fluid.
          Coupled with Cow pose (1b), it is a wonderful warm-up for the spine
          and, when synchronised with the breath, has a calming effect on the
          mind.
        </p>
        
        <li><h3> Low lunge / Anjaneyasana</h3></li>
        <img className="yoga-img" src={yoga2} alt="logo" />
        <p>
          Stretches the chest, hip flexors, quadriceps, sides of the waist and
          tops of the ankles and feet. Improves balance and mental focus. Great
          for runners, cyclists or if you spend a lot of the day sitting.
        </p>
        <li><h3>Warrior 2 / Virabhadrasana II</h3></li>
        <img className="yoga-img" src={yoga3} alt="logo" />
        <p>
          Stretches the inner thighs, groin, chest, lungs and shoulders.
          Strengthens your legs, improves stamina and concentration.
        </p>
       <li> <h3>Triangle / Trikonasana</h3></li>
        <img className="yoga-img" src={yoga4} alt="logo" />
        <p>
          Strengthens the legs, back and torso, lengthens the side of the body,
          stretches the inner thighs, hamstrings, calves, spine, shoulders,
          chest and hips.
        </p>
        <li><h3>Tree pose / Vrksasana</h3></li>
        <img className="yoga-img" src={yoga5} alt="logo" />
        <p>
          Improves balance, creates external rotation in the hips, strengthens
          the ankles, legs and spine, increases focus and concentration and
          quietens the mind.
        </p>
        <li><h3> Locust pose / Salabhasana</h3></li>
        <img className="yoga-img" src={yoga6} alt="logo" />
        <p>
          Improves strength and mobility in the back, stretches the front of the
          body, increases stamina and stimulates the digestive organs.
        </p>
        <li><h3>Bridge pose / Setu Bandha Sarvangasana</h3></li>
        <img className="yoga-img" src={yoga7} alt="logo" />
        <p>
          Stretches the chest, neck, spine, and hip flexors. Strengthens the
          back, glutes, and hamstrings and legs. An accessible backbend for most
          people.
        </p>
        <li><h3>Cow face pose / Gomukhasana</h3></li>
       <img className="yoga-img" src={yoga8} alt="logo" />
        <p>
          Stretches the ankles, hips and thighs, opens the upper back, chest and
          shoulders, and works the triceps. If the version in the photo is
          uncomfortable for your legs or hips try stretching the lower leg out
          in front of you.
        </p>
        <li><h3> Legs up the wall / Viparita Karani</h3></li>
        <img className="yoga-img" src={yoga9} alt="logo" />
        <p>
          This pose is known as the ‘great rejuvenator’ for good reason. It
          alleviates pressure in the legs, helps the circulation of both blood
          and lymphatic fluid and is a wonderful pose to do before bed or if you
          wake up in the middle of the night. Rest your legs against the wall or
          make it a little more active by just raising your legs above your hips
        </p>
        </ul>
      </div>
    </div>
  );
};
export default healthy;
