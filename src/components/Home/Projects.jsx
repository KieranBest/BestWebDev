import React from "react";

import styles from './Projects.module.css';
import projects from '../../data/projects.json';

import { getImageUrl } from '../../utils';

export const Projects = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <ul className={styles.projects}>
                    {projects.map((project, id) => {
                        return (
                            <li className={styles.project}>
                                <a href={project.source} className={styles.projectLink}></a>
                                <img src={getImageUrl(project.imageSrc)} alt={project.title} />
                                <div className={styles.projectDescription}>
                                    <a href={project.source}>{project.title}</a>
                                    <p>{project.description}</p>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}