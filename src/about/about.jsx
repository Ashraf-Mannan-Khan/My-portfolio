import styles from "../css/about.module.css";
import { MobileAbout } from "./responsiveAbout/mobileAbout";
import { DesktopAbout } from "./responsiveAbout/desktopAbout";

export function About() {
 
  return (
    <>
      <div className={styles.mobile}>
        <MobileAbout />
      </div>
      <div className={styles.desktop} >
        <DesktopAbout />
      </div>
    </>
  );
}
