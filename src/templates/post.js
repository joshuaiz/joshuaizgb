import React, { Component } from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Layout from '../layouts'

const PostTemplate = ({ data }) => {
    const post = data.wordpressPost

    return (
        <Layout>
            <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </Layout>
    )
}

// class PostTemplate extends Component {
//     render() {
//         const post = this.props.data.wordpressPost

//         console.log(post)

//         return (
//             <div>
//                 <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
//                 <div dangerouslySetInnerHTML={{ __html: post.content }} />
//             </div>
//         )
//     }
// }

PostTemplate.propTypes = {
    data: PropTypes.object.isRequired
}

export default PostTemplate

export const pageQuery = graphql`
    query($id: String!) {
        wordpressPost(id: { eq: $id }) {
            title
            categories {
                slug
                name
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
