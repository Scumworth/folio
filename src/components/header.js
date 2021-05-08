import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledHeader = styled.header`
    width: 100%;
    max-width: 92.5rem;
    height: 6.25rem;
    margin: 0 auto;
    padding: 0 2.5rem;
    background: white;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`
const StyledHome = styled.div`
    flex: 2; 
    display: flex;
    justify-content: flex-start;
`


const StyledPageLinks = styled.div`
    flex: 1;
    display: flex;
    justify-content: space-around;
`
const StyledLink = styled(Link)`
    font-size: 1.5em;
    color: black;
    font-weight: 600;
    &.active {
        text-decoration: underline;
        text-decoration-color: orange;
    }
    &:hover {
        text-decoration: underline;
        text-decoration-color: orange;
    }
`

const Header = () => {
    return (
        <StyledHeader>
            <StyledHome>
                <StyledLink to="/" activeClassName="active" aria-label="home">
                     /about
                </StyledLink>
            </StyledHome>
            <StyledPageLinks>
                <StyledLink to="/projects" activeClassName="active" aria-label="projects">
                    /projects
                </StyledLink>
                <StyledLink to="/contact" activeClassName="active" aria-label="contact">
                    /contact
                </StyledLink>
            </StyledPageLinks>
        </StyledHeader>
    )
}

export default Header
