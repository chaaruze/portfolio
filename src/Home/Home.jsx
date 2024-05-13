import React from "react";
import homeImg from "../assets/home.png";
import styles from "./style.module.css";

function Home() {
  const handleAboutClick = () => {
    const aboutSection = document.getElementById("About");
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div id="Home" className={styles.container}>
      <div className={styles.textColumn}>
        <div>
          <h3 className={styles.textSize}>
            <span>I'm</span>{" "}
            <span className={styles.nameSpan}>John Charles Omagap</span>
          </h3>
          <h6 className={styles.textSize}>
            Beginner Full Stack Developer, <br /> Ready to Learn
          </h6>
          <div className={styles.buttonContainer}>
            <button onClick={handleAboutClick} className={styles.button}>
              About Me
            </button>
          </div>
        </div>
      </div>
      <div className={styles.imageColumn}>
        <img src={homeImg} className={styles.img} alt="Home" />
      </div>
    </div>
  );
}

export default Home;
