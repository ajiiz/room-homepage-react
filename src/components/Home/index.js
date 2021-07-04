import React from 'react'

import Navbar from "../Navbar"
import data from "./data"
import "../../styles/home.scss"

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="home">
                <img className="home-gallery" src={data.galleryData[0].image}></img>
                <div className="home-info-wrapper">
                    <div className="home-info-text">
                        <h1 className="home-info-text__header">{data.galleryData[0].header}</h1>
                        <p className="home-info-text__content">{data.galleryData[0].content}</p>
                        <p className="home-info-text__button">shop now</p>
                    </div>
                    <div className="home-info-arrows">
                        <div className="home-info-arrows__arrow arrow-right"></div>
                        <div className="home-info-arrows__arrow arrow-light"></div>
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
