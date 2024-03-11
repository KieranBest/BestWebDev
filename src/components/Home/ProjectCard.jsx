import React from "react";

import { getImageUrl } from "../../utils";

export const ProjectCard = ({
    project : { title, imageSrc, description, skills, source  }
}) => {
    return (
        <div>
        <img src={getImageUrl(imageSrc)} alt={`Image of ${title}`} />
        <h3>{title}</h3>
        <p>{description}</p>
        <div>
            <a href={source}>Source</a>
        </div>
    </div>
    );
};