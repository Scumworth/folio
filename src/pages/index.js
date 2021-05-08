import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/hero"

const IndexPage = ({ data }) => {
    return (
        <Layout>
            <Hero content={data.hero.edges[0].node} />
        </Layout>
    )
}

export default IndexPage

export const pageQuery = graphql`
    {
        hero: allMarkdownRemark(
            filter: {
                fileAbsolutePath: { regex: "/content/hero/" }
            }
        ) {
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
