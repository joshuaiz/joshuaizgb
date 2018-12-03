import React from 'react'
import Link from 'gatsby-link'
import Layout from '../layouts'

const IndexPage = () => (
    <Layout>
        <h1>Hello World</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Link to="/page-2/">Go to page 2</Link>
    </Layout>
)

export default IndexPage