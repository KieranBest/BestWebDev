import React from "react";

import styles from './Projects.module.css';
import designs from '../../data/designs.json';
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
    return (
        <section className={styles.container}>
            <div className={styles.projects}>
                {
                    designs.map((design, id) => {
                        return (
                            <ProjectCard key={id} project={design} />
                    );
            })}
            </div>
        </section>
    );
}