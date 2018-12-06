import React from 'react'
import { graphql } from 'gatsby'
import Parser from 'html-react-parser'
import PropTypes from 'prop-types'
import PostHeader from '../components/PostHeader/PostHeader'
import Layout from '../layouts/DefaultLayout'
import './post.scss'

const PostTemplate = ({ data }) => {
    const post = data.wordpressPost

    console.log(post)

    return (
        <Layout>
            <article
                className={`type-post hentry post-${post.id} post-${
                    post.wordpress_id
                }`}
            >
                <PostHeader post={post} />
                <section className="entry-content">
                    {post.featured_media && (
                        <div className="post-image">
                            <img
                                src={post.featured_media.source_url}
                                alt={post.featured_media.alt_text}
                            />
                        </div>
                    )}
                    <div className="post-content">{Parser(post.content)}</div>
                </section>
            </article>
        </Layout>
    )
}

PostTemplate.propTypes = {
    data: PropTypes.object.isRequired
}

export default PostTemplate

export const pageQuery = graphql`
    query($id: String!) {
        wordpressPost(id: { eq: $id }) {
            id
            wordpress_id
            title
            date(formatString: "MMMM DD, YYYY")
            author {
                name
                link
            }
            categories {
                slug
                name
            }
            featured_media {
                source_url
                alt_text
            }
            content
        }
        site {
            siteMetadata {
                title
                subtitle
            }
        }
    }
`
