import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./style.module.css";

function Header() {
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Navbar expand="lg" fixed="top" bg="white" className={`${styles.header} py-3 shadow-sm`}>
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <Nav className="mx-auto">
          <Nav.Link
            onClick={() => handleScrollTo("Home")}
            className={`${styles.navLink} text-dark text-uppercase fs-4 fw-bold mx-3 px-3`}
          >
            Home
          </Nav.Link>
          <Nav.Link
            onClick={() => handleScrollTo("About")}
            className={`${styles.navLink} text-dark text-uppercase fs-4 fw-bold mx-3 px-3`}
          >
            About
          </Nav.Link>
          <Nav.Link
            onClick={() => handleScrollTo("Projects")}
            className={`${styles.navLink} text-dark text-uppercase fs-4 fw-bold mx-3 px-3`}
          >
            Projects
          </Nav.Link>
          <Nav.Link
            onClick={() => handleScrollTo("Skillsets")}
            className={`${styles.navLink} text-dark text-uppercase fs-4 fw-bold mx-3 px-3`}
          >
            Skillsets
          </Nav.Link>
        </Nav>
      </div>
    </Navbar>
  );
}

export default Header;
