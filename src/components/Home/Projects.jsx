import React from "react";


import designs from '../../data/designs.json';
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
    return (
        <section>
            <div>
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