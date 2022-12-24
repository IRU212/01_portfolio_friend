import React from 'react'
import { Link } from 'react-router-dom'

// scss import 
import styles from '../scss/header.module.scss'
import CommonStyles from '../scss/common.module.scss'

function Header() {
    return (
        <div className={styles.Header}>
            <div className={styles.Home}>
                <Link to="/" className={CommonStyles.Link}>
                    Home
                </Link>
            </div>
        </div>
    )
}

export default Header