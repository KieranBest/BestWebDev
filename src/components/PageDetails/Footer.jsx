import React from "react";

import styles from "./Footer.module.css";
import { getImageUrl } from "../../utils";

export const Footer = () => {
    return (
        <footer>
            <div className={styles.Container}>
                <div className={styles.content}>
                    <div className={styles.left}>
                        <img src={getImageUrl("footerImg/favicon.ico")} alt="Kieran Best" />
                        <a href="http://best-website-demo.s3-website.eu-west-2.amazonaws.com/">Kieran Best</a>
                    </div>
                    <div className={styles.right}>
                        <a href="https://www.linkedin.com/in/kieransbest/">LinkedIn</a>
                        <img src={getImageUrl("footerImg/linkedinIcon.png")} alt="LinkedIn" />
                    </div>
                </div>
            </div>
        </footer>
    );
}