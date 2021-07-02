import React from 'react'
import { Link } from "react-router-dom"

import Logo from "../../assets/logo.svg"

const index = () => {
    return (
        <div className="navbar" style={{backgroundColor:"black"}}>
            <img src={Logo}></img>
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
