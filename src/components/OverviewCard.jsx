/* eslint-disable react/prop-types */
import { useSocialMedia } from "../context/SocialMediaProvider";
import styles from "./OverviewCard.module.css";

function OverviewCard({ title, imageSocial, num, percent, iconUpDown, color }) {

    const {darkMode} = useSocialMedia()

  return (
    <div className={`${styles.overviewCard} ${darkMode ? '' : styles.light}`}>
      <div className={styles.flex}>
        <p className={styles.title}>{title}</p>
        <img src={imageSocial} alt="" />
      </div>

      <div className={styles.flex}>
        <h3>{num}</h3>
        <div className={styles.stats}>
          <img src={iconUpDown} alt="" />
          <p style={{ color: color }}>{percent}%</p>
        </div>
      </div>
    </div>
  );
}

export default OverviewCard;
