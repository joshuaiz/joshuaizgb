import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import Layout from '../layouts'

const PostsTemplate = ({ data }) => {
    const postUrl = 'post/'

    return (
        <Layout>
            <h1>Posts</h1>

            <ul className="posts-list" style={{ listStyle: 'none' }}>
                {data.allWordpressPost.edges.map(({ node }) => (
                    <li
                        key={node.id}
                        className="post"
                        style={{ marginBottom: 50 }}
                    >
                        <Link to={postUrl + node.slug}>
                            <h3
                                dangerouslySetInnerHTML={{
                                    __html: node.title
                                }}
                            />
                        </Link>

                        <p className="post-date">{node.date}</p>

                        <div
                            className="post-excerpt"
                            dangerouslySetInnerHTML={{
                                __html: node.excerpt
                            }}
                        />
                        <Link to={postUrl + node.slug}>Read more Â»</Link>
                    </li>
                ))}
            </ul>
        </Layout>
    )
}

PostsTemplate.propTypes = {
    data: PropTypes.object.isRequired
}

export default PostsTemplate

export const pageQuery = graphql`
    query wordsQuery {
        allWordpressPost {
            edges {
                node {
                    id
                    title
                    excerpt
                    slug
                    date(formatString: "MMMM DD, YYYY")
                }
            }
        }
    }
`
