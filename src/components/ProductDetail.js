import React from 'react';
import styles from './ProductDetail.module.css';

const ProductDetail = () => {
  return (
    <section className={styles.productDetail}>
      <div className={styles.productDetailContent}>
        <h2 className={styles.productDetailTitle}>Handpicked with Extraterrestrial Care</h2>
        <p className={styles.productDetailText}>Each Galactic Green seed is carefully selected and harvested by our dedicated alien workforce. They might look scary, but trust us, they're <strong>passionate</strong> about horticulture. Just look at their fascination!</p>
        <p className={styles.productDetailText2}>And don't worry! Despite the rumors circulating on Reddit, <strong>they definitely won't come to life at night and eat your cat!</strong> They're strictly vegan.</p>
      </div>
      <div className={styles.productDetailImage}>
        <img src={`${process.env.PUBLIC_URL}/harvest.png`} alt="Aliens harvesting seeds" className={styles.aliensImage}/>
      </div>
    </section>
  );
}

export default ProductDetail;