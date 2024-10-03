import { useSocialMedia } from '../context/SocialMediaProvider'
import styles from './Toggle.module.css'

function Toggle() {
  const { setDarkMode} = useSocialMedia()

    return (
        <div className={styles.wrapper} >
      <input type="checkbox" id="hide-checkbox" className={styles.hideCheckbox} onClick={() => setDarkMode(v => !v)}/>
      <label htmlFor="hide-checkbox" className={styles.toggle}>
        <span className={styles.toggleButton}>
          <span className={`${styles.crater} ${styles.crater1}`}></span>
          <span className={`${styles.crater} ${styles.crater2}`}></span>
          <span className={`${styles.crater} ${styles.crater3}`}></span>   
          <span className={`${styles.crater} ${styles.crater4}`}></span>
          <span className={`${styles.crater} ${styles.crater5}`}></span>
          <span className={`${styles.crater} ${styles.crater6}`}></span>
          <span className={`${styles.crater} ${styles.crater7}`}></span>
        </span>
        <span className={`${styles.star} ${styles.star1}`}></span>
        <span className={`${styles.star} ${styles.star2}`}></span>
        <span className={`${styles.star} ${styles.star3}`}></span>
        <span className={`${styles.star} ${styles.star4}`}></span>
        <span className={`${styles.star} ${styles.star5}`}></span>
        <span className={`${styles.star} ${styles.star6}`}></span>
        <span className={`${styles.star} ${styles.star7}`}></span>
        <span className={`${styles.star} ${styles.star8}`}></span>
      </label>
    </div>
    )
}

export default Toggle
