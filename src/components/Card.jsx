/* eslint-disable react/prop-types */
import { useSocialMedia } from "../context/SocialMediaProvider";
import styles from "./Card.module.css";

function Card({
  imageSocial,
  nickName,
  followNum,
  colorUpDown,
  imageUpDown,
  numUpDown,
  whatPeople,
  gradientFirstColor,
  gradientSecondColor,
}) {

  const {darkMode} = useSocialMedia()



  return (
    <div className={`${styles.card} ${darkMode ? '' : styles.light}`}>
      <div
        style={{
          background: `linear-gradient(to right, ${gradientFirstColor}, ${gradientSecondColor})`,
        }}
        className={styles.cardTopBorder}
      ></div>
      <div className={styles.cardTop}>
        <img src={imageSocial} alt="" />
        <p>{nickName}</p>
      </div>

      <h2>{followNum}</h2>
      <p className={styles.whatPeople}>
        {whatPeople ? whatPeople : "followers"}
      </p>

      <div className={styles.cardBottom}>
        <img src={imageUpDown} alt="" />
        <p style={{ color: colorUpDown }}>{numUpDown} Today</p>
      </div>
    </div>
  );
}

export default Card;
