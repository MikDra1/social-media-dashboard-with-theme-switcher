import styles from "./Navigation.module.css";
import Toggle from "./Toggle";
import { useSocialMedia } from "../context/SocialMediaProvider";

function Navigation() {
  const { darkMode } = useSocialMedia();

  return (
    <header className={`${styles.header} ${darkMode ? "" : styles.light}`}>
      <div className={styles.headerTop}>
        <h1>Social Media Dashboard</h1>
        <p>Total Followers: 23,004</p>
      </div>

      <div className={styles.toggle}>
        <p>Dark Mode</p>
        <Toggle />
      </div>
    </header>
  );
}

export default Navigation;
