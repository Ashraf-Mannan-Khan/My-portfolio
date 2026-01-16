import styles from '../css/tools.module.css';
import {useState, useEffect} from "react";

import '../css/font.css'
export function Tools() {
    const [reducedMotion, setReducedMotion] = useState(false);
    const images = [
        "src/image/icons/html.png ",
        "src/image/icons/js.png",
        'src/image/icons/sciene.png',
        "src/image/icons/github.png",
        'src/image/icons/typescript.png',
        'src/image/icons/programing.png',
        "src/image/icons/html.png",
        'src/image/icons/css-3.png',
        "src/image/icons/js.png",
        'src/image/icons/sciene.png',
        "src/image/icons/github.png",
        'src/image/icons/typescript.png',
        'src/image/icons/programing.png',
         
    ]
    return (
        <>
        <div className={styles.container}>
            <section className={styles.heading}>
                <h2>Tools i use which i use Daily</h2>
            </section>
            <section className={styles.tools_container}>
                <div className={styles.scroller}>
                    {images.map((src, index)=> <img src={src} className={styles.tools}  alt={src} key={`img-${index}`} />)}
                </div>
            
            </section>

            <section className={styles.tools_container}>
                <div className={styles.scroller}  style={{ animationDirection: 'reverse'}}>
                    {images.map((src, index)=> <img src={src} className={styles.tools}  alt={src} key={`img-${index}`} />)}
                </div>
            
            </section>
            </div>
             
        </>
    )
}