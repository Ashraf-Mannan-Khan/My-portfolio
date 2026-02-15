import styles from "../headerCss/mobile.module.css";

import { useState } from "react";

export function MobileHeader() {
  const [menuClick, setMenuClick] = useState(false);
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.menu} onClick={() => setMenuClick(!menuClick)}>
          <button
            className={`${styles.menu_item} ${menuClick ? styles.translateButton : ""}`}
          ></button>
          <button
            className={`${styles.menu_item} ${menuClick ? styles.hideButton : ""}`}
          ></button>
          <button
            className={`${styles.menu_item} ${menuClick ? styles.antiTranslateButton : ""}`}
          ></button>
        </div>

        {menuClick && (
          <div className={`${styles.overlay} `}>
            <div className={styles.side_menu}>
              <ul className={styles.list}>
                <li className={styles.list_item}>
  
                  <a href="/">
                    Home
                  </a>
                </li>
                <li className={styles.list_item}>
                  {" "}
                  <a href="#tools">
                    Tools
                  </a>
                </li>
                <li className={styles.list_item}>
                  <a  href="#mobileWork">
                    Projects
                  </a>
                </li>
                <li className={styles.list_item}>
                  <a href="#mobileContact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </nav>
    
    </>
  );
}
