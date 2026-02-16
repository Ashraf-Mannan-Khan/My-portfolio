import styles from "../headerCss/desktop.module.css";
import "../../../css/font.css";


export function DesktopHeader() {
  return (
    <>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.list_item}>
            <a href="/" className={styles.anchor}>
              Home
            </a>
          </li>
          <li className={styles.list_item}>
            <a href="#Desktoptools" className={styles.anchor}>
             Tools
            </a>
          </li>
          <li className={styles.list_item}>
            <a href="#desktopWork" className={styles.anchorLink}>
              Projects
            </a>
          </li>
          <li className={styles.list_item}>
            <a href="#contact" className={styles.anchor}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
