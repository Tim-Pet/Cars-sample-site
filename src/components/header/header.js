import React from 'react'
import {Link} from 'gatsby'

import headerStyles from "./header.module.scss"

const Header = () => {
    return (
        <header className={headerStyles.section}>
            <Link className={headerStyles.logo} to='/'>Logo</Link>
            <input type="checkbox" id="nav-toggle" className={headerStyles.navToggle}/>
            <nav className={headerStyles.navbar}>
                <ul className={headerStyles.navItemList}>
                    <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">Home</Link></li>
                    <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/pictures">Pictures</Link></li>
                </ul>
            </nav>
            <label htmlFor="nav-toggle" className={headerStyles.navToggleLabel}>
                <span></span>
            </label>
        </header>
    )
}

export default Header