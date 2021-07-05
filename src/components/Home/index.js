import React, { useState, useEffect } from 'react'

import Navbar from "../Navbar"
import data from "./data"
import ArrowLeft from "../../assets/icon-angle-left.svg"
import ArrowRight from "../../assets/icon-angle-right.svg"
import ArrowLong from "../../assets/icon-arrow.svg"
import "../../styles/home.scss"

const Home = () => {

    const [currentSlide, setCurrentSlide] = useState([])
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

    useEffect(() => {
        setCurrentSlide(data.galleryData[slideId])
    }, [slideId])

    return (
        <>
            <Navbar />
            <div className="home">
                <img className="home-gallery" src={data.galleryData[slideId].image}></img>
                <div className="home-info-wrapper">
                    <div className="home-info-text-container">
                        <div className="home-info-text">
                            <h1 className="home-info-text__header">{data.galleryData[0].header}</h1>
                            <p className="home-info-text__content">{data.galleryData[0].content}</p>
                            <div className="home-info-text__button">
                                <span className="home-info-text__button__text">shop now</span>
                                <img className="home-info-text__button__arrow" src={ArrowLong} />
                            </div>
                        </div>
                    </div>
                    <div className="home-info-arrows">
                        <div className="home-info-arrows__arrow" onClick={() => handleClick("left")}>
                            <img src={ArrowLeft} />
                        </div>
                        <div className="home-info-arrows__arrow" onClick={() => handleClick("right")}>
                            <img src={ArrowRight} />
                        </div>
                    </div>
                </div>
                <div className="home-about">
                    <img className="home-about__photo" src={data.aboutData.imageDark}/>
                    <div className="home-about__text-wrapper">
                        <div className="home-about__text-wrapper__text">
                            <h3 className="home-about__text-wrapper__text__header">{data.aboutData.header}</h3>
                            <p className="home-about__text-wrapper__text__content">{data.aboutData.content}</p>
                        </div>
                    </div>
                    <img className="home-about__photo" src={data.aboutData.imageLight}/>
                </div>
            </div>
        </>
    )
}

export default Home
