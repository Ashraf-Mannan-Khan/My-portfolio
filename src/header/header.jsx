import styles from "../css/header.module.css";
import "../css/font.css";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { DesktopHeader } from "./responsiveHeader/desktopHeader";
import { MobileHeader } from "./responsiveHeader/mobileHeader";
export function Header() {

  return (
    <>
    <div className={styles.mobile}>
      <MobileHeader />
    </div>
    <div className={styles.desktop}>
      <DesktopHeader/>
    </div>
    </>
    
    
  )
}
