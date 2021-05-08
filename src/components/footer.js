import * as React from "react"
import styled from "styled-components"
import { SiGithub } from "@react-icons/all-files/si/SiGithub"
import { SiLinkedin } from "@react-icons/all-files/si/SiLinkedin"
import { FaCodepen } from "@react-icons/all-files/fa/FaCodepen"
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter"

const StyledFooter = styled.footer`
    width: 100%;
    height: 6.25rem;
    margin: 0 auto;
    padding: 4rem;
    background: black;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: +1px;
    font-weight: 700;
    > a {
        padding: 10px;
    }
    > a:hover {
        color: orange;
    }
`

const Footer = () => {
    const iconStyles = { fontSize: "3rem" }
    return (
        <StyledFooter>
            <a
                href="https://github.com/scumworth"
                target="_blank"
                rel="nofollow noopener noreferrer"
                aria-label="External Link"
            >
                <SiGithub style={{...iconStyles}} />
            </a>
            <a
                href="https://linkedin.com/in/dmcninch"
                target="_blank"
                rel="nofollow noopener noreferrer"
                aria-label="External Link"
            >
                <SiLinkedin style={{...iconStyles}} />
            </a>
            <a
                href="https://codepen.io/Scumworth/"
                target="_blank"
                rel="nofollow noopener noreferrer"
                aria-label="External Link"
            >
                <FaCodepen style={{...iconStyles}} />
            </a>
            <a
                href="https://twitter.com/danmcninch"
                target="_blank"
                rel="nofollow noopener noreferrer"
                aria-label="External Link"
            >
                <FaTwitter style={{...iconStyles}}/>
            </a>
        </StyledFooter>
    )
}

export default Footer
