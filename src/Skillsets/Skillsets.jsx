import React, { useRef } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import htmlLogo from "../assets/html-logo.png";
import cssLogo from "../assets/css-logo.png";
import jsLogo from "../assets/js-logo.png";
import phpLogo from "../assets/php-logo.png";
import xamppLogo from "../assets/xampp-logo.png";
import reactLogo from "../assets/react-logo.png";
import styles from "./style.module.css";

function Skillsets() {
  const skillsetsRef = useRef(null);

  return (
    <div
      id="Skillsets"
      ref={skillsetsRef}
      className={`container py-5 ${styles.skillsets}`}
    >
      <div className={styles.topRow}>
        <h3 className={styles.title}>Skillsets</h3>
      </div>
      <Container>
        <SkillRow
          logo={htmlLogo}
          title="HTML"
          description="Proficient in creating structured web pages."
        />
        <SkillRow
          logo={cssLogo}
          title="CSS"
          description="Skilled in styling and layout techniques."
        />
        <SkillRow
          logo={jsLogo}
          title="JavaScript"
          description="Experienced in client-side scripting and DOM manipulation."
        />
        <SkillRow
          logo={reactLogo}
          title="React.js"
          description="Expanding expertise in building dynamic user interfaces."
        />
        <SkillRow
          logo={phpLogo}
          title="PHP"
          description="Learning server-side scripting and backend development."
        />
        <SkillRow
          logo={xamppLogo}
          title="XAMPP & SQL"
          description="Acquiring proficiency in local development and database management."
        />
      </Container>
    </div>
  );
}

function SkillRow({ logo, title, description }) {
  return (
    <Row className="align-items-center mb-4">
      <Col md={2} className="text-center">
        <img
          src={logo}
          alt={`${title} Logo`}
          style={{ width: "40%", height: "auto" }}
        />
      </Col>
      <Col md={10}>
        <Card className="h-100 shadow-sm">
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Skillsets;
