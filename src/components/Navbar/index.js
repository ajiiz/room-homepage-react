import React, { useState } from 'react'
import { Link } from "react-router-dom"

import Logo from "../../assets/logo.svg"
import IconHamburger from "../../assets/icon-hamburger.svg"
import IconClose from "../../assets/icon-close.svg"
import "../../styles/navbar.scss"

const index = () => {

    const [isBurger, setIsBurger] = useState(false)

    const handleClick = () => {
        setIsBurger(!isBurger)
    }

    return (
        <div className="navbar">
            <img src={isBurger ? IconHamburger : IconClose} className="hamburger" onClick={handleClick} />
            <img src={Logo} className="logo" />
            <ul className="nav-items">
                <li className="nav-items__items">
                    <Link className="nav-items__link" to="/home">home</Link>
                </li>
                <li className="nav-items__items">
                    <Link className="nav-items__link" to="/shop">shop</Link>
                </li>
                <li className="nav-items__items">
                    <Link className="nav-items__link" to="/about">about</Link>
                </li>
                <li className="nav-items__items">
                    <Link className="nav-items__link" to="/contact">contact</Link>
                </li>
            </ul>
        </div>
    )
}

export default index
