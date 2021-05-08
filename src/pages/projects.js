import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import ProjectsList from "../components/projectsList"

const ProjectsPage = ({ data }) => {
    return (
        <Layout>
            <ProjectsList content={data.project.edges} />
        </Layout>
    )
}

export default ProjectsPage

export const pageQuery = graphql`
    {
        project: allMarkdownRemark(
            filter: {
                fileAbsolutePath: { regex: "/content/projects/" }
                frontmatter: { visible: { eq: true } }
            }
        ) {
            edges {
                node {
                    frontmatter {
                        title
                        github
                        screenshot {
                            childImageSharp {
                                fluid(maxWidth: 800, quality: 90) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    rawMarkdownBody
                }
            }
        }
    }
`
