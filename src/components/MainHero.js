import React from 'react';
import styles from './MainHero.module.css';

const MainHero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Grow Your Own Galaxy with Galactic Green Seeds</h1>
        <p className={styles.heroText}>Experience the wonder of cultivating your own personal cosmos, right at home.</p>
        <button className={styles.heroButton}>Order Now</button>
      </div>
      <div className={styles.heroImage}>
        <img src={`${process.env.PUBLIC_URL}/garden.png`} alt="Garden" className={styles.gardenImage}/>
      </div>
    </section>
  );
}

export default MainHero;