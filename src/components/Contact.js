import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section className={styles.contact}>
      <div className={styles.contactImage}>
        <img src={`${process.env.PUBLIC_URL}/team.png`} alt="Alien team" className={styles.teamImage} />
      </div>
      <div className={styles.contactContent}>
        <h2 className={styles.contactTitle}>Meet Our Extraterrestrial Team</h2>
        <p className={styles.contactText}>
          With more than a millennium of experience in intergalactic horticulture, our dedicated alien workforce is unmatched in the universe.
          Our team has meticulously harvested seeds from sentient, pain-sensitive plants (for science!) and holds advanced degrees in TransPlantism.
          Despite their... um...*unique* appearance, their passion for greenery is undeniable.
          Meet our team of "eager" managers who are excited to bring their expertise to <em>your</em> garden!
        </p>
        <a href="mailto:support@symbiotic.love?subject=Gimmie dem seeds" className={styles.contactButton}>
          Contact Us!
        </a>
      </div>
    </section>
  );
}

export default Contact;