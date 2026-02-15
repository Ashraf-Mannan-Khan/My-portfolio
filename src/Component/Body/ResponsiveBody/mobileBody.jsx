import { useState, useEffect } from "react";

import styles from "../responsiveCss/mobile.module.css";

export function MobileBody(props) {
  const [text, setText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    let message = "I am Ashraf Khan & I am frontend developer...";
    if (currentIndex < message.length) {
      let timeoutId = setTimeout(() => {
        setText((prev) => prev + message[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 70);
      return () => clearTimeout(timeoutId);
    }
  }, [currentIndex, text]);

  return (
    <>
      {props.children}
      <div className={styles.body}>
        <div className={styles.info_div}>
          <h1 className={styles.title}>{text}</h1>
          <p className={styles.paragraph}>
            Frontend developer focused on <span>thoughtful UI</span> and{" "}
            <span>smooth interactions</span>. I build experiences that feel{" "}
            <span>light</span>, <span>purposeful</span>, and never demand more
            attention than <span> they deserve</span>.
          </p>
          <p className={styles.paragraph}>
            I am a Frontend developer from{" "}
            <span className={styles.india}>
              <b>India</b>
            </span>
            .
          </p>
          <p className={styles.paragraph}>
            I really enjoy shaping <span>visual experiences</span>, whether
            through <span>interface design</span>, <span>motion</span>, or
            carefully <span>crafted interactions</span>
          </p>
          <button className={styles.btn_resume}>Resume</button>
          <button className={styles.btn_resume}>Hire Me</button>
        </div>
      </div>
    </>
  );
}
