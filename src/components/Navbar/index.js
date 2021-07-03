import React, { useState } from 'react'

import NavbarView from "./NavbarView"

const Navbar = () => {

    const [isBurger, setIsBurger] = useState(true)

    const handleClick = () => {
        setIsBurger(!isBurger)
    }

    return (
        <NavbarView isBurger={isBurger} handleClick={handleClick} />
    )
}

export default Navbar
