import React from "react";

import styles from "./Header.module.css";

export const Header = () => {
    return (
        <header>
            <nav className="navbar">
                <ul className={styles.menuItems}>
                    <li className={styles.title}><a href="/">Home</a></li>
                    <div className={styles.subTitles}>
                        <li className={styles.links}><a href="/Contact">Contact</a></li>
                        <li className={styles.links}><a href="/About">About</a></li>
                    </div>
                </ul>
            </nav>
        </header>
    );
};

