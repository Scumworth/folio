import * as React from "react"
import styled from "styled-components"

const StyledForm = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > input {
        height: 50px;
    }
    > input, textarea {
        border-radius: 5px;
        width: 50%
    }
    .buttonWrap {
        display: flex;
        flex-direction: row;
    }
`

const ContactForm = () => (
    <StyledForm method="post" action="https://formspree.io/email@domain.tld">
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
            <button type="submit">Send</button>
            <input type="reset" value="Clear" />
            <input type="text" name="_gotcha" style={{ display: "none" }} />
        </span>

    </StyledForm>
)

export default ContactForm
