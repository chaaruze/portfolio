import React, { useRef } from "react";
import Header from "./Header/Header.jsx";
import Home from "./Home/Home.jsx";
import About from "./About/About.jsx";
import Skillsets from "./Skillsets/Skillsets.jsx";
import Projects from "./Project/Projects.jsx";
import Footer from "./Footer/Footer.jsx";
import { Scrollspy } from "@makotot/ghostui";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./appStyles.module.css";

function App() {
  // const homeRef = useRef(null);
  // const aboutRef = useRef(null);
  // const projectsRef = useRef(null);
  // const skillsetsRef = useRef(null);

  return (
    <>
      <Header />
      {/* <Scrollspy sectionRefs={[homeRef, aboutRef, projectsRef, skillsetsRef]}>
        {({ currentElementIndexInViewport }) => (
          <div className={styles.scrollspyContainer}>
            {["Home", "About", "Projects", "Skillsets"].map((section, index) => (
              <div
                key={index}
                className={`${styles.dot} ${index === currentElementIndexInViewport ? styles.isCurrent : ""}`}
              />
            ))}
          </div>
        )}
      </Scrollspy> */}
      <Home/>
      <div className="mx-auto" style={{ borderTop: "3px solid #d1a85f", width: "80%" }} />
      <About />
      <Projects/>
      <Skillsets />
      <Footer />
    </>
  );
}

export default App;
