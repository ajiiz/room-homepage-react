import React from 'react'

import Navbar from "../Navbar"
import data from "./data"
import ArrowLeft from "../../assets/icon-angle-left.svg"
import ArrowRight from "../../assets/icon-angle-right.svg"
import ArrowLong from "../../assets/icon-arrow.svg"
import "../../styles/home.scss"

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="home">
                <img className="home-gallery" src={data.galleryData[0].image}></img>
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
                        <img className="home-info-arrows__arrow" src={ArrowLeft} />
                        <img className="home-info-arrows__arrow" src={ArrowRight} />
                    </div>
                </div>
                <div className="home-about">
                    <div className="home-about__photo photo-left"></div>
                    <div className="home-about__text">
                        <h3 className="home-about__text__header">{data.aboutData.header}</h3>
                        <p className="home-about__text__content">{data.aboutData.content}</p>
                    </div>
                    <div className="home-about__photo photo-right"></div>
                </div>
            </div>
        </>
    )
}

export default Home
