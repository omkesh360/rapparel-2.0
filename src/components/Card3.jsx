import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./Card3.module.css";

const Card3 = ({
  className = "",
  womenswear,
  propFlex,
  propMinWidth,
  propWidth,
}) => {
  const card1Style = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
      width: propWidth,
    };
  }, [propFlex, propMinWidth, propWidth]);

  return (
    <div className={[styles.card, className].join(" ")} style={card1Style}>
      <div className={styles.image}>
        <div className={styles.button}>
          <div className={styles.buy}>BUY</div>
        </div>
      </div>
      <div className={styles.copy}>
        <div className={styles.womenswear}>{womenswear}</div>
      </div>
    </div>
  );
};

Card3.propTypes = {
  className: PropTypes.string,
  womenswear: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
  propWidth: PropTypes.any,
};

export default Card3;
