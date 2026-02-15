import styles from '../../css/contact.module.css';

import { MobileContact } from './responsiveContact/mobileContact';
import { DesktopContact } from './responsiveContact/desktopContact';
export function Contact () {

    return (
      <>
         <div className={styles.mobile} id="mobileContact" >
                      <MobileContact/>
                    </div>
                    <div className={styles.desktop} id="contact" >
                    <DesktopContact />
                    </div>
      </>
    )
}