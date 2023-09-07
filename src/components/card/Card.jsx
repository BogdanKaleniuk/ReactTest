import React from "react";
import styles from "./card.module.css";
import arrowImg from "../../img/categories/Arrow.svg";

const Card = (props) => {
  const { title, img } = props;
  return (
    <div className={styles.card}>
      <a className={styles.card__link} href="#!"></a>
      <img className={styles.card__img} src={img} alt="Category01" />
      <div className={styles.card__body}>
        <div className={styles.card__text}>
          <div className={styles.card__title}>{title}</div>
          <div className={styles.card__muted}>Explore Now!</div>
        </div>
        <div className={styles.card__icon}>
          <img src={arrowImg} alt="arrow" />
        </div>
      </div>
    </div>
  );
};

export default Card;
