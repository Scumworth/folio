import * as React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { FaCode } from "@react-icons/all-files/fa/FaCode"

const StyledProject = styled.div`
    display: flex;
    margin-bottom: 30px;
`
const StyledProjectPrimer = styled.span`
    flex: 1;
    background-color: #000000;
    color: #ffffff;
    padding: 14px;
    .linkWrap {
        display: flex;
        align-items: center; 
        justify-content: space-around;
    }
    .projectTitle {
        color: #ffffff;
        text-decoration: underline;
    }
    a:hover {
        color: orange;
    }
`
const StyledProjectImage = styled.span`
    flex: 3;
`

const Project = ({ data }) => {
    const { frontmatter, rawMarkdownBody } = data
    const { title, screenshot, source, live } = frontmatter
    const iconStyles = { fontSize: "2rem" }
    return (
        <StyledProject>
            <StyledProjectImage>
                <Img
                    className="screenshot"
                    fluid={screenshot.childImageSharp.fluid}
                />
            </StyledProjectImage>
            <StyledProjectPrimer>
                <h2 className="projectTitle">{title}</h2>
                <div className="linkWrap">
                    <a
                        href={ live }
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        aria-label="External Link"
                    >
                        www
                    </a>
                    <a
                        href={ source }
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        aria-label="External Link"
                    >
                        <FaCode style={{...iconStyles}} />
                    </a>
                </div>
                <p>{rawMarkdownBody}</p>
            </StyledProjectPrimer>
        </StyledProject>
    )
}

export default Project
