import styles from "../headerCss/desktop.module.css";
import "../../../css/font.css";


export function DesktopHeader() {
  return (
    <>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.list_item}>
            <a href="/" className={styles.a}>
              Home
            </a>
          </li>
          <li className={styles.list_item}>
            <a href="#Desktoptools" className={styles.a}>
             Tools
            </a>
          </li>
          <li className={styles.list_item}>
            <a href="#desktopWork" className={styles.anchorLink}>
              Projects
            </a>
          </li>
          <li className={styles.list_item}>
            <a href="#contact" className={styles.a}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
