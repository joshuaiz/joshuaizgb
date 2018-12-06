import React from 'react'
import Parser from 'html-react-parser'
import { graphql } from 'gatsby'
import Layout from '../layouts/DefaultLayout'

const PageTemplate = ({ data }) => {
    const currentPage = data.wordpressPage

    return (
        <Layout>
            <article className="type-page hentry">
                <header className="article-header">
                    <h1 className="page-title">{Parser(currentPage.title)}</h1>
                    <div className="byline post-date">{currentPage.date}</div>
                </header>
                <section className="entry-content">
                    {Parser(currentPage.content)}
                </section>
                <footer className="article-footer">{null}</footer>
            </article>
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
