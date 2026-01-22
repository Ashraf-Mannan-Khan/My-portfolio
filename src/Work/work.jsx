import { MobileWork } from "./responsiveWork/mobileWork";
import { DesktopWork } from "./responsiveWork/desktopWork";
import styles from '../css/work.module.css';
export function Work() {


    return (
        <>
            <div className={styles.mobile} id="mobileWork">
                  <MobileWork />
                </div>
                <div className={styles.desktop} id="desktopWork">
                  <DesktopWork/>
                </div>

        </>
    )
} 