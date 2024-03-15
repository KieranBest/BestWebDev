import React from "react";

import "../../App.css";

import styles from "./Intro.module.css";

export const Intro = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>About.</h1>
                <div className={styles.paragraph}>
                    <p>Working as a 1 man team to create a website that you can be proud of.</p>
                    <p>Charging a minimal amount to ensure that you're business can thrive.</p>
                    <p>Costs include:</p>
                    <ul>
                        <li>A one off build</li>
                        <li>Monthly maintenance</li>
                        <li>Changes at your request if deemed sizeable</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};
