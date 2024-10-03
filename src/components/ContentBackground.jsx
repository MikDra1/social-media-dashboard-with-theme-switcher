import { useSocialMedia } from '../context/SocialMediaProvider';
import styles from './ContentBackground.module.css'

function ContentBackground() {
    const { darkMode } = useSocialMedia();

    return (
        <div className={`${styles.contentBackground} ${darkMode ? styles.contentBackgroundDark : ''}`}>
            
        </div>
    )
}

export default ContentBackground
