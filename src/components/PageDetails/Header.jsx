import React from "react";

import styles from "./Header.module.css";

export const Header = () => {
    return (
        <header>
            <nav className="navbar">
                <ul className={styles.menuItems}>
                    <li><a className={styles.title} href="/">Home</a></li>
                    <li><a className={styles.links} href="/Restaurant1">Restaurant1</a></li>
                    <li><a className={styles.links} href="/Restaurant2">Restaurant2</a></li>
                </ul>
            </nav>
        </header>
    );
};

