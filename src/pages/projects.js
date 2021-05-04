import * as React from 'react'
import PageTransition from 'gatsby-plugin-page-transitions';

import Layout from "../components/layout"

const ProjectsPage = () => {
    return (
        <PageTransition>
            <Layout>
                <h1>Projects</h1>
            </Layout>
        </PageTransition>
    )
}

export default ProjectsPage
