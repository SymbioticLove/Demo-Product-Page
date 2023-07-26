import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Galactic Greenery, Inc. All rights reserved.</p>
      <p>TradeMark ™ Galactic Greenery</p>
      <p>Registered office: Neptune</p>
      <a href="/privacy-policy" className={styles.link}>Privacy Policy</a>
    </footer>
  );
};

export default Footer;
