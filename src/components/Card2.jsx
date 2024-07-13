import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./Card2.module.css";

const Card2 = ({ className = "", propFlex, propMinWidth, propWidth }) => {
  const card2Style = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
      width: propWidth,
    };
  }, [propFlex, propMinWidth, propWidth]);

  return (
    <div className={[styles.card, className].join(" ")} style={card2Style}>
      <div className={styles.image}>
        <button className={styles.button}>
          <div className={styles.buy}>BUY</div>
        </button>
      </div>
      <div className={styles.copy}>
        <div className={styles.wetside}>Wetside</div>
      </div>
    </div>
  );
};

Card2.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
  propWidth: PropTypes.any,
};

export default Card2;
