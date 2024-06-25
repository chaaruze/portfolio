import React from "react";
import styles from "./style.module.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

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
    <Navbar
      expand="lg"
      className={styles.header}
    >
      <Nav className="mx-auto justify-content-center">
        <Nav.Link
          onClick={() => handleScrollTo("Home")}
          className={`${styles.navLink} nav-link`}
        >
          Home
        </Nav.Link>
        <Nav.Link
          onClick={() => handleScrollTo("About")}
          className={`${styles.navLink} nav-link`}
        >
          About
        </Nav.Link>
        <Nav.Link
          onClick={() => handleScrollTo("Projects")}
          className={`${styles.navLink} nav-link`}
        >
          Projects
        </Nav.Link>
        <Nav.Link
          onClick={() => handleScrollTo("Skillsets")}
          className={`${styles.navLink} nav-link`}
        >
          Skillsets
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Header;
