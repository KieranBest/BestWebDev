import React from "react";

import "../../App.css";

import styles from "./Intro.module.css";

export const Intro = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <div className={styles.title}>
                    <h1>Get a Website with No Fuss.</h1>
                </div>
                <div className={styles.paragraph}>
                    <p>
                        Creating websites that are fast, secure, and easy to
                        manage. We specialize in websites for small businesses,
                        non-profits, and individuals.
                    </p>
                </div>
            </div>
        </section>
    );
};
