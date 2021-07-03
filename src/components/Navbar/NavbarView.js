import React from 'react'

import NavbarItems from "./NavbarItems"
import Logo from "../../assets/logo.svg"
import IconHamburger from "../../assets/icon-hamburger.svg"
import IconClose from "../../assets/icon-close.svg"
import "../../styles/navbar.scss"

const NavbarView = ({ isBurger, handleClick }) => {
    return (
        <div className="navbar" style={{backgroundColor: !isBurger && "white"}}>
            <img src={isBurger ? IconHamburger : IconClose} className="hamburger" onClick={handleClick} />
            <img src={Logo} className="logo" />
            <NavbarItems isBurger={isBurger} />
        </div>
    )
}

export default NavbarView
