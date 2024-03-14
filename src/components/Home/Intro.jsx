import React from "react";

import "../../App.css";

import styles from "./Intro.module.css";

export const Intro = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <div className={styles.paragraphs}>
                    <h1>Get a Website with No Fuss.</h1>
                    <h2>Are you a local business?</h2>
                    <h3>Let's see what I can do for you</h3>
                </div>
                <div className={styles.paragraphs}>
                    <h4>Design Ideas</h4>
                    <p>
                        To start off, take a look around at these design ideas. If you see something you like, let me know using <a href="">this form here</a> and we can start from there.
                    </p>
                    <h4>Colour Schemes</h4>
                    <p>
                        Using the right colours can make a big difference to your website, using the colour navigator on the left you can change the colours for every aspect until you find something that suits you.
                    </p>
                </div>
            </div>
        </section>
    );
};
