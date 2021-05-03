import * as React from "react"
import styled = "styled-components"
import { StaticQuery, graphql } from "gatsby"

import SlideShow from "./slideshow"

const StyledProject = styled.div`
    width: 100%
`

const Project = () => {
    return (
        <StaticQuery
            query={graphql`
                query {
                    allFile(
                        sort: { fields: name, order: DESC }
                        filter: { relativeDirectory: { eq: "slides" } }
                    ) {
                        edges {
                            node {
                                id
                                name
                                childImageSharp {
                                    fluid(maxWidth: 600) {
                                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                                    }
                                }
                            }
                        }
                    }
                }
            `}
            render={
                data => (
                    
                    <StyledProject>
                        <SlideShow slides={data.slides} />
                    </StyledProject>
                )
            }
        />
    )
}

export default Project
