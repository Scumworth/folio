import * as React from 'react';
import PageTransition from 'gatsby-plugin-page-transitions';

import Layout from "../components/layout"

const ContactPage = () => {
    return (
        <PageTransition>
            <Layout>
                <h1>Contact</h1>
            </Layout>
        </PageTransition>
    )
}

export default ContactPage
