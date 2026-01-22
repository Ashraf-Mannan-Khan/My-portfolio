
import styles from '../responsiveCss/mobileAbout.module.css';
import image from "../../image/image1.jpeg";
export function MobileAbout() {

    return (
        <>
            <div className={styles.container}>
                <section className={styles.section}> 
                    
                      <div className={styles.card_container}>
                        
                    <div className={styles.img_container}>
                        <img src={image} alt="coder boy" className={styles.img} />
                    </div>
                    
                     <h3 className={styles.title}>Hello!</h3>
                </div>
                <div className={styles.text_div}>
                        <p>Hi,</p>
                        <p>Hello again! since you are here,</p>
                        <p>A little about me.</p>
                        <p>I am a Frontend developer from <span className={styles.india}><b>India</b></span>.</p>
                        <p>I really enjoy shaping <span>visual experiences</span>, whether through <span>interface design</span>, <span>motion</span>, or carefully <span>crafted interactions</span> </p>
                </div>
                </section>
              
            </div>



        </>


    )

}