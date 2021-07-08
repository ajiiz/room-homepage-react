import React from 'react'

import "../../styles/info.scss"

const Info = ({ name }) => {
    return (
        <div className="info">
            <h1 className="info-text">There will be {name} component soon (probably...)</h1>
        </div>
    )
}

export default Info
