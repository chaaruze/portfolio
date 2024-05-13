import React from "react";
import styles from "./style.module.css";
import htmlLogo from "../assets/html-logo.png";
import cssLogo from "../assets/css-logo.png";
import jsLogo from "../assets/js-logo.png";
import phpLogo from "../assets/php-logo.png";
import xamppLogo from "../assets/xampp-logo.png";
import reactLogo from "../assets/react-logo.png";

function Skillsets() {
  return (
    <div id="Skillsets" className={styles.container}>
      <div className={styles.content}>
        <h3 className={styles.title}>Skillsets</h3>

        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <div className={styles.imageContainer}>
              <img src={htmlLogo} alt="HTML Logo" />
            </div>
            <div className={styles.cardContent}>
              <h3>HTML</h3>
              <p>Proficient in creating structured web pages.</p>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.imageContainer}>
              <img src={cssLogo} alt="CSS Logo" />
            </div>
            <div className={styles.cardContent}>
              <h3>CSS</h3>
              <p>Skilled in styling and layout techniques.</p>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.imageContainer}>
              <img src={jsLogo} alt="JavaScript Logo" />
            </div>
            <div className={styles.cardContent}>
              <h3>JavaScript</h3>
              <p>Experienced in client-side scripting and DOM manipulation.</p>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.imageContainer}>
              <img src={reactLogo} alt="React Logo" />
            </div>
            <div className={styles.cardContent}>
              <h3>React.js</h3>
              <p>Expanding expertise in building dynamic user interfaces.</p>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.imageContainer}>
              <img src={phpLogo} alt="PHP Logo" />
            </div>
            <div className={styles.cardContent}>
              <h3>PHP</h3>
              <p>Learning server-side scripting and backend development.</p>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.imageContainer}>
              <img src={xamppLogo} alt="XAMPP Logo" />
            </div>
            <div className={styles.cardContent}>
              <h3>XAMPP & SQL</h3>
              <p>Acquiring proficiency in local development and database management.</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Skillsets;
