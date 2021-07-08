import React from 'react'
import { useHistory } from "react-router-dom";

import "../../styles/info.scss"

const Info = ({ name }) => {

    const history = useHistory()

    const handleClick = (event) => {
        event.preventDefault()
        history.push("/home")
    }

    return (
        <div className="info">
            <h1 className="info-text">There will be {name} component soon (probably...)</h1>
            <button className="info-btb btn" onClick={handleClick}>go back</button>
        </div>
    )
}

export default Info
