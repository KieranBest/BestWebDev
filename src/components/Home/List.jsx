import React from "react";

export const List = () => {
    return (
        <section className={styles.container} id="projects">
            <h2 className={styles.title}>Projects</h2>
            <div className={styles.content}>
                <ul className={styles.projectList}>
                    <li className={styles.projectItem}>
                        <img src={getImageUrl("projects/project1.jpg")} alt="project1" />
                        <div className={styles.projectItemText}>
                            <h3>Project 1</h3>
                            <p>Project 1 is a project that I have been working on for the last 6 months. It is a web application that allows users to search for and book a table at a restaurant.</p>
                        </div>
                    </li>
                    <li className={styles.projectItem}>
                        <img src={getImageUrl("projects/project2.jpg")} alt="project2" />
                        <div className={styles.projectItemText}>
                            <h3>Project 2</h3>
                            <p>Project 2 is a project that I have been working on for the last 6 months. It is a web application that allows users to search for and book a table at a restaurant.</p>
                        </div>
                    </li>
                    <li className={styles.projectItem}>
                        <img src={getImageUrl("projects/project3.jpg")} alt="project3" />
                        <div className={styles.projectItemText}>
                            <h3>Project 3</h3>
                            <p>Project 3 is a project that I have been working on for the last 6 months. It is a web application that allows users to search for and book a table at a restaurant.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}