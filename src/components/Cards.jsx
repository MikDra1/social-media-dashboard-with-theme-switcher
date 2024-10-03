import Card from "./Card";
import styles from "./Cards.module.css";

function Cards() {
  return (
    <div className={styles.cards}>
      <Card
        imageSocial="./images/icon-facebook.svg"
        nickName="@nathanf"
        numUpDown="12"
        followNum="1987"
        imageUpDown="./images/icon-up.svg"
        gradientFirstColor="hsl(208, 92%, 53%)"
        gradientSecondColor="hsl(208, 92%, 53%)"
        colorUpDown="hsl(208, 92%, 53%)"
      />

      <Card
        imageSocial="./images/icon-twitter.svg"
        nickName="@nathanf"
        numUpDown="99"
        followNum="1044"
        imageUpDown="./images/icon-up.svg"
        colorUpDown="hsl(203, 89%, 53%)"
        gradientFirstColor="hsl(203, 89%, 53%)"
        gradientSecondColor="hsl(203, 89%, 53%)"
      />

      <Card
        imageSocial="./images/icon-instagram.svg"
        nickName="@realnathanf"
        numUpDown="1099"
        followNum="11k"
        imageUpDown="./images/icon-up.svg"
        colorUpDown="hsl(203, 89%, 53%)"
        gradientFirstColor="hsl(37, 97%, 70%)"
        gradientSecondColor="hsl(329, 70%, 58%)"
      />

      <Card
        imageSocial="./images/icon-youtube.svg"
        nickName="Nathan F."
        numUpDown="144"
        followNum="8239"
        imageUpDown="./images/icon-down.svg"
        whatPeople="Subscribers"
        colorUpDown="hsl(348, 97%, 39%)"
        gradientFirstColor="hsl(348, 97%, 39%)"
        gradientSecondColor="hsl(348, 97%, 39%)"
      />
    </div>
  );
}

export default Cards;
