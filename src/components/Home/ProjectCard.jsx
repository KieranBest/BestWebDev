import React from "react";

import { getImageUrl } from "../../utils";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({
    project : { title, imageSrc, description, skills, source  }
}) => {
    return (
        <a className={styles.container} href={source}>
            <img className={styles.image} src={getImageUrl(imageSrc)} alt={`Image of ${title}`} />
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
        </a>
    );
};