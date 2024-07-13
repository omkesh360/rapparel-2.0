import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./Card4.module.css";

const Card4 = ({
  className = "",
  menswear,
  propFlex,
  propMinWidth,
  propWidth,
}) => {
  const cardStyle = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
      width: propWidth,
    };
  }, [propFlex, propMinWidth, propWidth]);

  return (
    <div className={[styles.card, className].join(" ")} style={cardStyle}>
      <div className={styles.image}>
        <div className={styles.button}>
          <div className={styles.buy}>BUY</div>
        </div>
      </div>
      <div className={styles.copy}>
        <div className={styles.menswear}>{menswear}</div>
      </div>
    </div>
  );
};

Card4.propTypes = {
  className: PropTypes.string,
  menswear: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
  propWidth: PropTypes.any,
};

export default Card4;
