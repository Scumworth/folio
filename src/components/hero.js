import * as React from "react"
import styled from "styled-components"

const StyledSection = styled.section`
    .title {
        margin-bottom: 0;
    }
    .subtitle {
        margin-top: 0;
    }
    .highlighted {
        box-shadow: inset 0 -2.5rem 0 #cdf3e1;
    }
`

const Hero = ({ content }) => {
    const { frontmatter, rawMarkdownBody } = content
    return (
        <StyledSection id="hero">
            <h1 className="title">
                {frontmatter.greetings}{" "}
                {frontmatter.title}
            </h1>
            <h2 className="subtitle">
                {frontmatter.subtitlePrefix}{" "}
            </h2>
            <div className="description">
                {rawMarkdownBody}
            </div>
        </StyledSection>
    )
}

export default Hero