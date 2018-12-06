import React from 'react'
import { Link } from 'gatsby'
import styles from './Logo.module.scss'
import logo from './joshuaiz.jpg'

const Logo = () => (
    <div className={styles.logo}>
        <Link to="/">
            <img src={logo} alt="Logo" />
        </Link>
    </div>
)

export default Logo
