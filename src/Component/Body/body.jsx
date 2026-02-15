import { useState, useEffect } from "react";

import styles from '../../css/body.module.css';
import { DesktopBody } from "./ResponsiveBody/desktopBody";
import { MobileBody } from "./ResponsiveBody/mobileBody";
import { Card } from "../Card/card";

export function Body() {
  


    return (
        <>
          
              <div className={styles.mobile}>
                <MobileBody >
                    <Card/>
                </MobileBody>
              </div>
              <div className={styles.desktop}>
                <DesktopBody>
                    <Card/>
                </DesktopBody>
              </div>
             
        </>
    )
}