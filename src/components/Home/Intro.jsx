import React from "react";

import "../../App.css";

import styles from "./Intro.module.css";

export const Intro = () => {
    return (
        <section className={styles.container}>
            <div>
                <h1>Design Ideas</h1>
                <p>From here you'll be able to see a portfolio of design ideas that I can use to create your website.
                    These can be tweaked in any number of ways to suit your product or service and your vision.</p>
            </div>
        </section>
    );
};
