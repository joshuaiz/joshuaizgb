import React from 'react'
import { Link } from 'gatsby'
import Layout from '../layouts/DefaultLayout'

const IndexPage = () => (
    <Layout>
        <h1>Hello World</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Link to="/page-2/">Go to page 2</Link>
    </Layout>
)

export default IndexPage
