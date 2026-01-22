import styles from "../headerCss/mobile.module.css";

import { Link, NavLink, Outlet } from "react-router-dom";
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
                  {" "}
                  <NavLink to="/" className={styles.navLink}>
                    Home
                  </NavLink>
                </li>
                <li className={styles.list_item}>
                  {" "}
                  <NavLink to="/about" className={styles.navLink}>
                    About
                  </NavLink>
                </li>
                <li className={styles.list_item}>
                  <a href="#mobileWork" className={styles.anchorLink}>
                    Work
                  </a>
                </li>
                <li className={styles.list_item}>
                  <a href="#mobileContact" className={styles.navLink}>
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
