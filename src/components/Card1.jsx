import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./Card1.module.css";

const Card1 = ({ className = "", mensFormal, propGap, propOverflow }) => {
  const card3Style = useMemo(() => {
    return {
      gap: propGap,
      overflow: propOverflow,
    };
  }, [propGap, propOverflow]);

  return (
    <div className={[styles.card, className].join(" ")} style={card3Style}>
      <div className={styles.image}>
        <div className={styles.button}>
          <div className={styles.buy}>BUY</div>
        </div>
      </div>
      <div className={styles.copy}>
        <div className={styles.mensFormal}>{mensFormal}</div>
      </div>
    </div>
  );
};

Card1.propTypes = {
  className: PropTypes.string,
  mensFormal: PropTypes.string,

  /** Style props */
  propGap: PropTypes.any,
  propOverflow: PropTypes.any,
};

export default Card1;
