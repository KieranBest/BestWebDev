import React from "react";

import styles from "./Header.module.css";

export const Header = () => {
    return (
        <header>
            <nav className="navbar">
                <ul className={styles.menuItems}>
                    <li><a className={styles.title} href="/">Home</a></li>
                    <li><a className={styles.links} href="/About">About</a></li>
                    <li><a className={styles.links} href="/Contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

