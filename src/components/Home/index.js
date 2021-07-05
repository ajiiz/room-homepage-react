import React, { useState } from 'react'

import Navbar from "../Navbar"
import HomeView from "./HomeView"
import data from "./data"
import "../../styles/home.scss"

const Home = () => {

    const [slideId, setSlideId] = useState(0)

    const handleClick = (dir) => {
        let dataLength = data.galleryData.length
        let id = slideId
        if (dir === "right") {
            id = (slideId + 1 < dataLength) ? id + 1 : 0
        } else if (dir === "left") {
            id = (slideId - 1 >= 0) ? id - 1 : dataLength - 1
        }
        setSlideId(id)
    }

    return (
        <>
            <Navbar />
            <HomeView handleClick={handleClick} id={slideId} data={data} />
        </>
    )
}

export default Home
