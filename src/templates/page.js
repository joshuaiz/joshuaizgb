import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Layout from '../layouts'

const PageTemplate = ({ data }) => {
    const siteMetadata = data.site.siteMetadata
    const currentPage = data.wordpressPage

    return (
        <Layout>
            <h3 dangerouslySetInnerHTML={{ __html: siteMetadata.title }} />
            <h3 dangerouslySetInnerHTML={{ __html: currentPage.title }} />
            <div dangerouslySetInnerHTML={{ __html: currentPage.content }} />
        </Layout>
    )
}

export default PageTemplate

export const pageQuery = graphql`
    query($id: String!) {
        wordpressPage(id: { eq: $id }) {
            title
            content
            slug
            date(formatString: "MMMM DD, YYYY")
        }
        site {
            id
            siteMetadata {
                title
                subtitle
            }
        }
    }
`
