import styles from '../responsiveCss/mobileContact.module.css';
import contactImage from "../../../image/icons/connect.avif";
export function MobileContact () {

    return (
        <>
        <section className={styles.conatiner} >
            <h2>Let's Get in Touch</h2>
            <p>I Love to connect</p>
            <img src={contactImage} alt="connect-image" className={styles.image} />
            <a href="mailto:ashrfkhn97@gmail.com" target="_blank" className={styles.information}>
                <p>Email</p>
                <p className={styles.arrow}>ashrfkhn97@gmail.com</p>
            </a>
            <a href="https://www.linkedin.com/in/ashraf-mannan-khan?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" className={styles.information}>
                <p>LinkedIn</p>
                <p className={`${styles.arrow} ${styles.moreRight}`}>Ashraf-Mannan-Khan</p>
            </a>
            <a href="https://www.facebook.com/AshrafMannanKhan" target="_blank" className={styles.information}>
                <p>Facebook</p>
                <p className={`${styles.arrow} ${styles.moreRight}`}>AshrafMannanKhan</p>
            </a>
            <a href="https://github.com/Ashraf-Mannan-Khan" target="_blank" className={styles.information}>
                <p>Github</p>
                <p className={`${styles.arrow} ${styles.moreRight}`}>Ashraf-Mannan-Khan</p>
            </a>
        </section>
        <footer>
            <h2>Ashraf Khan</h2>
            <h2>Ⓒ 2025</h2>
            <p>Created with idea of "simplicity" and easy to "navigate"</p>
        </footer>
        </>
    )
}