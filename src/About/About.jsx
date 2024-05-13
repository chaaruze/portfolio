import React from "react";
import styles from "./style.module.css";
import aboutImg from "../assets/about-me.png";

function About() {
  return (
    <div id="About" className={styles.container}>
      <div className={styles.content}>
        <div className={styles.image}>
          <img src={aboutImg} alt="About Me"/>
        </div>
        <div className={styles.textContainer}>
          <h3>About Me</h3>
          <p>
            I'm John Charles Omagap, a beginner full-stack developer passionate
            about creating exceptional web experiences. I'm currently developing
            my skills with React, PHP, and SQL while also advancing my knowledge
            of HTML, CSS and, Javascript. Outside of coding, I enjoy the
            creative challenges of drawing and playing guitar. I'm actively
            seeking opportunities to learn and contribute to impactful projects.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
