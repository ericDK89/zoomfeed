import zoomLogo from "../../assets/zoom-feed.svg"
import styles from "./Header.module.scss"

export const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <img src={zoomLogo} alt="Logo do Zoom" />
      <span>Zoom Feed</span>
    </header>
  )
}