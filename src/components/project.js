import * as React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

const StyledProject = styled.div`
    display: flex;
    margin-bottom: 30px;
`
const StyledProjectPrimer = styled.span`
    flex: 1;
    background-color: #000000;
    padding: 14px;
    * {
        color: #ffffff;
    }
`
const StyledProjectImage = styled.span`
    flex: 3;
`

const Project = ({ data }) => {
    console.log("TEST");
    console.log(data);
    const { frontmatter, rawMarkdownBody } = data
    const { title, screenshot } = frontmatter
    return (
        <StyledProject>
            <StyledProjectImage>
                <Img
                    className="screenshot"
                    fluid={screenshot.childImageSharp.fluid}
                />
            </StyledProjectImage>
            <StyledProjectPrimer>
                <h2>{title}</h2>
                <p>{rawMarkdownBody}</p>
            </StyledProjectPrimer>
        </StyledProject>
    )
}

export default Project
