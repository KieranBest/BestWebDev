import React, {useState} from "react";

import {getImageUrl} from "../../../utils";

import styles from "./Navbar.module.css";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <header>
            <nav>
                <div className={styles.nav}>
                    <img 
                        src={
                            menuOpen
                                ? getImageUrl("nav/closeIcon.png")
                                : getImageUrl("nav/menuIcon.png")
                        }
                        alt="menu-button"
                        onClick={() => setMenuOpen(!menuOpen)}/>
                    <ul className={`${styles.menuItems}`}
                        onClick={() => setMenuOpen(false)}>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#experience">Experience</a>
                        </li>
                        <li>
                            <a href="#projects">Projects</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};