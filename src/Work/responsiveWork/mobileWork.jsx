import styles from '../responsiveCss/mobileWork.module.css';
import '../../css/font.css';
import { useState } from 'react';
import logo from "../../image/icons/strategic-plan.png"
export function MobileWork() {
    let work = [
        {
            id: 0,
            framework: "React",
            name: "Tic Tac Toe",
            description: "Tic Tac Toe is a two-player game where players take turns marking X and O on a 3*3 grid, aiming to get three in a row.",
            src: logo,
        },
        {
            id: 1,
            framework: "React",
            name: "Tic Tac Toe",
            description: "Tic Tac Toe is a two-player game where players take turns marking X and O on a 3*3 grid, aiming to get three in a row.",
            src: logo,

        },
        {
            id: 2,
            framework: "React",
            name: "Currency Exchange App",
            description: "Tic Tac Toe is a two-player game where players take turns marking X and O on a 3*3 grid, aiming to get three in a row.",
            src: logo,
        }, {
            id: 3,
            framework: "React",
            name: "Spotify Playlist Save App",
            description: "Tic Tac Toe is a two-player game where players take turns marking X and O on a 3*3 grid, aiming to get three in a row.",
            src: logo,

        },
        {
            id: 4,
            framework: "React",
            name: "Reddit Client App",
            description: "Tic Tac Toe is a two-player game where players take turns marking X and O on a 3*3 grid, aiming to get three in a row.",
            src: logo,
        },
    ]


    return (
        <>
            <section className={styles.cardSection} >
                <h2 className={styles.title}>Featured Work</h2>
                <div className={styles.work_div}>
                    {work.map((item, index) => {
                        return (
                            <div className={styles.card} value={item.id} key={index}>
                                <div className={styles.img_div}>
                                    <img src={item.src} alt={item.name} className={styles.img} />
                                </div>
                                <div className={styles.text_div}>
                                    <h3 className={styles.framework} >{item.framework}</h3>
                                    <h4 className={styles.sub_title} >{item.name}</h4>
                                    <p className={styles.paragraph} >{item.description}</p>
                                    <div className={styles.circle}><span className={styles.arrow}>&#8594;</span></div>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </section>

        </>
    )
} 