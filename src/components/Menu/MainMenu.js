import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import './MainMenu.scss'

const MainMenu = ({ data }) => {
    // console.log(data)
    const menu = data.allWordpressWpApiMenusMenusItems.edges[1].node.items
    console.log(menu)
    return (
        <nav className="primary-nav">
            <ul className="main-menu">
                {menu.map(item => (
                    <li
                        key={`${item.object_slug}-${item.object_id}`}
                        id={`${item.object_slug}-${item.object_id}`}
                    >
                        {item.object_slug === 'design' ? (
                            <a href="https://studio.bio" target="blank">
                                Design
                            </a>
                        ) : (
                            <Link to={item.object_slug}>{item.title}</Link>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    )
}

// Use StaticQuery to grab the menu(s) here where we need them
// See here: https://www.gatsbyjs.org/docs/static-query/
export default props => (
    <StaticQuery
        query={graphql`
            query LayoutQuery {
                allWordpressWpApiMenusMenusItems {
                    edges {
                        node {
                            id
                            name
                            items {
                                title
                                url
                                object_slug
                                object_id
                            }
                        }
                    }
                }
            }
        `}
        render={data => <MainMenu data={data} />}
    />
)
