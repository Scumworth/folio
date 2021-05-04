import * as React from "react"
import { graphql } from "gatsby"
import PageTransition from 'gatsby-plugin-page-transitions';

import Layout from "../components/layout"
import Hero from "../components/hero"

const IndexPage = ({ data }) => {
    return (
        <PageTransition>
            <Layout>
                <Hero content={data.hero.edges[0].node} />
            </Layout>
        </PageTransition>
    )
}

export default IndexPage

export const pageQuery = graphql`
    {
        hero: allMarkdownRemark {
            edges {
                node {
                    frontmatter {
                        title
                        greetings
                        subtitle
                    }
                    rawMarkdownBody
                }
            }
        }
    }
`
