import { useSocialMedia } from "../context/SocialMediaProvider";
import styles from "./Overview.module.css";
import OverviewCard from "./OverviewCard";

// title, imageSocial, num, percent, iconUpDown, color

function Overview() {
  const { darkMode } = useSocialMedia();

  return (
    <div className={`${styles.overview} ${darkMode ? "" : styles.light}`}>
      <h2>Overview - Today</h2>


<div className={styles.overviewContent}>
      <OverviewCard
        title="Page Views"
        imageSocial="./images/icon-facebook.svg"
        num="87"
        percent="3"
        iconUpDown="./images/icon-up.svg"
        color="hsl(163, 72%, 41%)"
      />

      <OverviewCard
        title="Likes"
        imageSocial="./images/icon-facebook.svg"
        num="52"
        percent="2"
        iconUpDown="./images/icon-down.svg"
        color="hsl(356, 69%, 56%)"
      />

      <OverviewCard
        title="Likes"
        imageSocial="./images/icon-instagram.svg"
        num="5462"
        percent="2257"
        iconUpDown="./images/icon-up.svg"
        color="hsl(163, 72%, 41%)"
      />

      <OverviewCard
        title="Profile Views"
        imageSocial="./images/icon-instagram.svg"
        num="52k"
        percent="1375"
        iconUpDown="./images/icon-up.svg"
        color="hsl(163, 72%, 41%)"
      />

      <OverviewCard
        title="Retweets"
        imageSocial="./images/icon-twitter.svg"
        num="117"
        percent="303"
        iconUpDown="./images/icon-up.svg"
        color="hsl(163, 72%, 41%)"
      />

      <OverviewCard
        title="Likes"
        imageSocial="./images/icon-twitter.svg"
        num="507"
        percent="553"
        iconUpDown="./images/icon-up.svg"
        color="hsl(163, 72%, 41%)"
      />

      <OverviewCard
        title="Likes"
        imageSocial="./images/icon-youtube.svg"
        num="107"
        percent="19"
        iconUpDown="./images/icon-down.svg"
        color="hsl(356, 69%, 56%)"
      />

      <OverviewCard
        title="Total Views"
        imageSocial="./images/icon-youtube.svg"
        num="1407"
        percent="12"
        iconUpDown="./images/icon-down.svg"
        color="hsl(356, 69%, 56%)"
      />
      </div>
    </div>
  );
}

export default Overview;
