import * as React from "react"
import styled from "styled-components"

const StyledForm = styled.form`
    width: 50%;
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top:75px;
    > input {
        height: 70px;
        border: 3px solid #ccc;
        font-size: 28px;
    }
    > input, textarea {
        border-radius: 5px;
        width: 100%;
        padding: 10px;
        background-color: #000000;
        color: #ffffff;
        margin-bottom: 10px;
    }
    textarea {
        font-size: 14px;
    }
    .buttonWrap {
        display: flex;
        flex-direction: row;
    }
    .formButton {
        border: 2px solid black;
        background-color: #ffffff;
        padding: 5px;
        margin: 5px;
        font-family: "Bungee", Arial, Helvetica, sans-serif;
    }
    .formButton:hover {
        background-color: orange;
        cursor: pointer;
    }
    > label {
        align-self: flex-start;
    }
`

const ContactForm = () => (
    <StyledForm method="post" action="https://formspree.io/f/xoqyjgzk">
        <label>
            Name
        </label>
        <input type="text" name="name" id="name" />
        <label>
            Email
        </label>
        <input type="email" name="_replyto" id="email" />
        <label>
            Subject
        </label>
            <input type="text" name="subject" id="subject" />
        <label>
            Message
        </label>
            <textarea name="message" id="message" rows="5" />
        <span className="buttonWrap">
            <button className="formButton" type="submit">Send</button>
            <input className="formButton" type="reset" value="Clear" />
            <input type="text" name="_gotcha" style={{ display: "none" }} />
        </span>

    </StyledForm>
)

export default ContactForm
