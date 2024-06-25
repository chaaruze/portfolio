import React from "react";
import styles from "./style.module.css";
import projectImg from "../assets/project-1.png";
import projectLogo from "../assets/project-logo.png";

function Projects() {
  return (
    <div id="Projects" className={styles.container}>
      <div className={styles.topRow}>
        <h3 className={styles.title}>Projects</h3>
      </div>
      <div className={styles.content}>
        <div className={styles.image}>
          <img src={projectImg} alt="Project" />
        </div>
        <div className={styles.textContainer}>
          <div className={styles.textColumn}>
            <img className={styles.projectLogo} src={projectLogo} alt="Project" />
            <h1>STICA Clinic Records - Current</h1>
            <p>
              This system was created to modernize record-keeping by
              transitioning from paper to digital.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
