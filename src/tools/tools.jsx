import styles from '../css/tools.module.css';
import { DesktopTools } from './responsiveTools/desktopTools';
import { MobileTools } from './responsiveTools/mobileTools';
export function Tools() {

    return (
        <>
        <div className={styles.mobile}>
                    <MobileTools/>
                    </div>
                    <div className={styles.desktop}>
                    <DesktopTools/>
                    </div>
             
        </>
    )
}