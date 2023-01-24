import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import jstack from "../../Assets/Projects/jstack.gif";
import waiterapp from "../../Assets/Projects/waiterapp.gif";
import curr from "../../Assets/Projects/curr-ex.gif";
import solar from "../../Assets/Projects/solar.gif";
import shop from "../../Assets/Projects/shop.gif";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={curr}
              isBlog={false}
              title="Currency exchange"
              description="Personal currency exchange web page made consuming the exchangerate API build with JavaScript, HTML and CSS. Have features that allows user to get the value of a currency of all currencies in the world."
              ghLink="https://github.com/heitor-jsr/currency-exchange"
              demoLink="http://currency-exchange-trybers.surge.sh/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shop}
              isBlog={false}
              title="Shopping Cart"
              description="Personal Shopping Cart WebPage that consumes the MercadoLibre API. The page was built using JavaScript, CSS and HTML."
              ghLink="blank"
              demoLink="blank"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={solar}
              isBlog={false}
              title="Solar System"
              description="Simple WebPage made with React Classes. It renders all the planets in the solar system and the spacial missions that took place in every planet."
              ghLink="blank"
              demoLink="blank"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jstack}
              isBlog={false}
              title="My ThemeSwitcher Blog"
              description="SPA build using React.JS, React Router and styled components. Used to learn the fundaments of react and get used to the theming process, implementing a theme switcher with ThemeProvider (ContextAPI) so the user can chose which theme to use."
              ghLink="https://github.com/heitor-jsr/react-functional-components"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://raw.githubusercontent.com/heitor-jsr/L2-Code-Challange/main/03/imgs/paid.png"
              isBlog={false}
              title="Bank CRUD"
              description="A simple bank CRUD developed to the L2Code Challange. Made with express.js, JavaScript, Docker, Postgres and more."
              ghLink="https://github.com/heitor-jsr/L2-Code-Challange/tree/main/03"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={waiterapp}
              isBlog={false}
              title="WAITERAPP"
              description="An application developed to help waiters register the orders and send then to the kitchen to start the cooking process. Once the kitchen starts the process, the order status is changed. Finally when its done the kitchen change the order status to 'done' so the waiters know it is done."
              ghLink="https://github.com/heitor-jsr/waiter-app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
