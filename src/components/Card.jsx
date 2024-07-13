import PropTypes from "prop-types";
import styles from "./Card.module.css";

const Card = ({ className = "", descriptionOfSecondProduc }) => {
  return (
    <div className={[styles.card, className].join(" ")}>
      <div className={styles.image}>
        <img
          className={styles.plusCircleFillIcon}
          loading="lazy"
          alt=""
          src="/pluscircle-fill.svg"
        />
        <div className={styles.frameParent}>
          <div className={styles.buttonWrapper}>
            <button className={styles.button}>
              <div className={styles.buy}>BUY</div>
            </button>
          </div>
          <button className={styles.button1}>
            <div className={styles.buy1}>BUY</div>
          </button>
        </div>
      </div>
      <div className={styles.copy}>
        <div className={styles.product}>Product</div>
        <div className={styles.descriptionOfSecond}>
          {descriptionOfSecondProduc}
        </div>
        <div className={styles.div}>$10.99</div>
      </div>
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  descriptionOfSecondProduc: PropTypes.string,
};

export default Card;
