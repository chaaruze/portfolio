import React from "react";
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
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <button onClick={() => handleScrollTo("Home")} className={styles.navLink}>
              Home
            </button>
          </li>
          <li className={styles.navItem}>
            <button onClick={() => handleScrollTo("About")} className={styles.navLink}>
              About
            </button>
          </li>
          <li className={styles.navItem}>
            <button onClick={() => handleScrollTo("Projects")} className={styles.navLink}>
              Projects
            </button>
          </li>
          <li className={styles.navItem}>
            <button onClick={() => handleScrollTo("Skillsets")} className={styles.navLink}>
              Skillsets
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
