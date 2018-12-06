import React, { Component } from 'react'
import Parser from 'html-react-parser'
import Link from 'gatsby-link'
import Layout from '../layouts/DefaultLayout'

const NavLink = ({ test, url, text }) => {
    if (!test) {
        return <Link to={url}>{text}</Link>
    }
    return <span>{text}</span>
}

const IndexPage = ({ pathContext }) => {
    const { group, index, first, last, pageCount } = pathContext
    const previousUrl = index - 1 === 1 ? '' : (index - 1).toString()
    const nextUrl = (index + 1).toString()

    const postUrl = 'post/'
    const postsUrl = 'posts/'

    console.log(group)

    return (
        <Layout>
            <h4>{pageCount} Pages</h4>

            <ul className="nostyle posts-list">
                {group.map(({ node }) => (
                    <li
                        key={node.id}
                        className={`post-list post-${node.wordpress_id}`}
                        style={{ marginBottom: 50 }}
                    >
                        <Link to={postUrl + node.slug}>
                            <h2 className="post-title">{Parser(node.title)}</h2>
                        </Link>

                        <p className="post-date">{node.date}</p>

                        <div className="post-excerpt">
                            {Parser(node.excerpt)}
                        </div>
                    </li>
                ))}
            </ul>
            <div className="previousLink">
                <NavLink
                    test={first}
                    url={postsUrl + previousUrl}
                    text="Go to Previous Page"
                />
            </div>
            <div className="nextLink">
                <NavLink
                    test={last}
                    url={postsUrl + nextUrl}
                    text="Go to Next Page"
                />
            </div>
        </Layout>
    )
}
export default IndexPage
