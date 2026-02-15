import styles from '../responsiveCss/desktopWork.module.css';
import "../../../css/font.css"
import redditClone from "../../../image/RedditClone.png";
export function DesktopWork() {


return (
    <>
    <h3 className={styles.heading}>Projects</h3>
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={redditClone} alt="project-01" className={styles.image}/>
      </div>

      <div className={styles.content}>
        <h3>Reddit Client App</h3>
        <p>This is reddit clone app using json  api to display data.</p>

        <div className={styles.techstack}>
          <span>html</span>
          <span>css</span>
          <span>react</span>
          <span>redux</span>
        </div>

        <div className={styles.action}>
          <a href="https://reddit-client-app-tau.vercel.app/" className={styles.link_demo} target='_blank' rel="noopener noreferrer">Live-Demo</a>
          <a href="https://github.com/Ashraf-Mannan-Khan/reddit-client-app" className={styles.link_git} target='_blank' rel="noopener noreferrer">Github</a>
        </div>
      </div>
    </div>
    
    </>
  )
} 