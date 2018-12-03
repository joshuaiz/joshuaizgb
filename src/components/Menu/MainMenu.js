import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Link from 'gatsby-link'

const MainMenu = ({ data }) => {
    console.log(data)
    return (
        <div>
            <h1>Main Menu</h1>
            <ul>
                {data.allWordpressWpApiMenusMenusItems.edges[1].node.items.map(
                    item => (
                        <li key={item.object_slug}>
                            {item.object_slug === 'design' ? (
                                <a href="https://studio.bio" target="blank">
                                    Design
                                </a>
                            ) : (
                                <Link to={item.object_slug}>{item.title}</Link>
                            )}
                        </li>
                    )
                )}
            </ul>
        </div>
    )
}

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
                            }
                        }
                    }
                }
            }
        `}
        render={data => <MainMenu data={data} />}
    />
)

// console.log(menu)
// const data = menu.allWordpressWpApiMenusMenusItems.edges[1].node.items
//     return (
//         <div>Main Menu</div>
//         // <div>
//         //     <h1>Main Menu</h1>
//         //     <ul>
//         //         {data.map(item => (
//         //             <li key={item.object_slug}>
//         //                 {item.object_slug === 'design' ? (
//         //                     <a href="https://studio.bio" target="blank">
//         //                         Design
//         //                     </a>
//         //                 ) : (
//         //                     <Link to={item.object_slug}>{item.title}</Link>
//         //                 )}
//         //             </li>
//         //         ))}
//         //     </ul>
//         // </div>
//     )
// }

// class MainMenu extends Component {
//     render() {
//         const data = this.props.menu.allWordpressWpApiMenusMenusItems.edges[1]
//             .node.items
//         console.log(data)

//         return (
//             <div>
//                 <h1>Main Menu</h1>
//                 <ul>
//                     {data.map(item => (
//                         <li key={item.object_slug}>
//                             {item.object_slug === 'design' ? (
//                                 <a href="https://studio.bio" target="blank">
//                                     Design
//                                 </a>
//                             ) : (
//                                 <Link to={item.object_slug}>{item.title}</Link>
//                             )}
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         )
//     }
// }
