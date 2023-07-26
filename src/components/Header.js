import React from 'react';
import styles from './Header.module.css';

const Header = ({ setCurrentPage }) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        Galactic Greenery
      </div>
      <nav>
        <ul className={styles.nav}>
          <li><a href="#home" className={styles.link} onClick={() => setCurrentPage('home')}>Home</a></li>
          <li><a href="#about" className={styles.link} onClick={() => setCurrentPage('about')}>About</a></li>
          <li><a href="#contact" className={styles.link} onClick={() => setCurrentPage('contact')}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
