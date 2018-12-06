import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import Header from '../components/Header/Header'
import './style.scss'

const DefaultLayout = ({ children }) => (
    <Fragment>
        <Helmet
            title="Joshua Iz - Gatsby"
            meta={[
                { name: 'description', content: 'Sample' },
                { name: 'keywords', content: 'sample, something' }
            ]}
        />
        <div className="container">
            <Header />
            <div className="content">
                <div className="inner-content">
                    <main className="main">{children}</main>
                </div>
            </div>
            <aside className="sidebar">{null}</aside>
        </div>
    </Fragment>
)

export default DefaultLayout
