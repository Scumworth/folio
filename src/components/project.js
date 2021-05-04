import * as React from "react"
import styled = "styled-components"
import { StaticQuery, graphql } from "gatsby"

const StyledProject = styled.div`
    width: 100%
`

const Project = () => {
    return (
        <StyledProject>Project</StyledProject>
    )
}

export default Project
