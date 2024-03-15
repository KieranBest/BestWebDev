import React from "react";

import "../../App.css";

import styles from "./Intro.module.css";

export const Intro = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Contact.</h1>
                <div className={styles.paragraph}>
                    <p>So you wish to get in contact?</p>
                    <p>Well, you've come to the right place.</p>
                    <p>Fill out the form below and we'll get back to you as soon as we can.</p>
                </div>
            </div>
        </section>
    );
};
