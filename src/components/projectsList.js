import * as React from "react"

import Project from "./project"

const ProjectsList = ({ content }) => {
    return (
        <div>
            {
                content.map(project => {
                    return (
                        <Project data={project.node} />
                    )
                })
            }
        </div>
    )
}

export default ProjectsList
