import React from 'react';
import styles from './Header.module.css';

const Header = ({ setCurrentPage, currentPage }) => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <p className={styles.logo}>Galactic Greenery</p>
        <p className={styles.tagline}>We're Out of This World™</p>
      </div>
      <nav>
        <ul className={styles.nav}>
          <li>
            <a
              href="#home"
              className={currentPage === 'home' ? `${styles.link} ${styles.accent}` : styles.link}
              onClick={() => setCurrentPage('home')}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={currentPage === 'about' ? `${styles.link} ${styles.accent}` : styles.link}
              onClick={() => setCurrentPage('about')}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={currentPage === 'contact' ? `${styles.link} ${styles.accent}` : styles.link}
              onClick={() => setCurrentPage('contact')}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
