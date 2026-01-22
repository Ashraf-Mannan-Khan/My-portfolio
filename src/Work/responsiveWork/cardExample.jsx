
import styles from "../responsiveCss/cardExample.module.css";
import logo from "../../image/icons/strategic-plan.png"
export function CardExample() {
    return (
        <>
        <div className={styles.card}>
            <img src={logo} alt="image" className={styles.image} />
            <div className={styles.text_div}>
                <h3 className={styles.heading}>React</h3>
                <h4 className={styles.subHeading}>Tic Tac Toe</h4>
                <p className={styles.paragraph}>"Tic Tac Toe is a two-player game where players take turns marking X and O on a 3*3 grid, aiming to get three in a row."</p>
                <div className={styles.circle}><span className={styles.arrow}>&#8594;</span></div>
                </div> 
        </div>
        </>
    )
}