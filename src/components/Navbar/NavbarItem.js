import React from 'react'
import { Link } from "react-router-dom"

const NavbarItem = ({ where, name }) => {
    return (
        <li className="nav-items__items">
            <Link className="nav-items__link" to={where}>{name}</Link>
        </li>
    )
}

export default NavbarItem
