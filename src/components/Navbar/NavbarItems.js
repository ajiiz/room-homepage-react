import React from 'react'

import NavbarItem from './NavbarItem'

const NavbarItems = ({ isBurger }) => {
    return (
        <ul className="nav-items" style={{display: !isBurger && "flex"}}>
            <NavbarItem where="/home" name="home" />
            <NavbarItem where="/shop" name="shop" />
            <NavbarItem where="/about" name="about" />
            <NavbarItem where="/contact" name="contact" />
        </ul>
    )
}

export default NavbarItems
