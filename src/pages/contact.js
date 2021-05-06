import * as React from 'react';

import Layout from "../components/layout"
import ContactForm from "../components/contactForm" 
 
const ContactPage = () => {
    return (
        <Layout>
            <h1>Contact</h1>
            <ContactForm />
        </Layout>
    )
}

export default ContactPage
