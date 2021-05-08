import * as React from "react"
import styled from "styled-components"
import { SiRust } from '@react-icons/all-files/si/SiRust'
import { SiJavascript } from '@react-icons/all-files/si/SiJavascript'
import { FaReact } from '@react-icons/all-files/fa/FaReact'
import { FaPhp } from '@react-icons/all-files/fa/FaPhp'
import { FaHtml5 } from '@react-icons/all-files/fa/FaHtml5'
import { FaCss3 } from '@react-icons/all-files/fa/FaCss3'
import { SiRedis } from '@react-icons/all-files/si/SiRedis'
import { SiMysql } from '@react-icons/all-files/si/SiMysql'
import { SiMongodb } from '@react-icons/all-files/si/SiMongodb'
import { FaNode } from '@react-icons/all-files/fa/FaNode'


const StyledSection = styled.section`
    .title {
        margin-bottom: 0;
        font-size: 6rem;
        line-height: 6rem;
    }
    .subtitleWrap {
        > * {
           margin: 10px; 
        }
        display: flex;
        align-items: center;
    }
    .highlighted {
        box-shadow: inset 0 -2.5rem 0 #cdf3e1;
    }
`

const Hero = ({ content }) => {
    const { frontmatter, rawMarkdownBody } = content
    const iconStyles = { fontSize: "4rem" }
    return (
        <StyledSection id="hero">
            <h1 className="title">
                {frontmatter.greetings}{" "}
                {frontmatter.title}
            </h1>
            <div className="subtitleWrap">
                <h2 className="subtitle">
                    {frontmatter.subtitle}{" "}
                </h2>
                <SiJavascript style={{...iconStyles, color: "#e4a126"}} />
                <FaReact style={{...iconStyles, color: "#61dbfb"}} />
                <FaNode style={{...iconStyles, color: "#80bd01"}} />
                <FaHtml5 style={{...iconStyles, color: "#e44d26"}} />
                <FaCss3 style={{...iconStyles, color: "#396dc0"}} />
                <FaPhp style={{...iconStyles, color: "#617db5"}} />
                <SiRust style={{...iconStyles, color: "#000000"}} />
                <SiRedis style={{...iconStyles, color: "#c72c27"}} />
                <SiMongodb style={{...iconStyles, color: "#14aa51"}} />
                <SiMysql style={{...iconStyles, color: "#00758f"}} />
            </div>
            <div className="description">
                {rawMarkdownBody}
            </div>
        </StyledSection>
    )
}

export default Hero
