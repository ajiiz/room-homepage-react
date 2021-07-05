import React from 'react'

import ArrowLeft from "../../assets/icon-angle-left.svg"
import ArrowRight from "../../assets/icon-angle-right.svg"
import ArrowLong from "../../assets/icon-arrow.svg"

const HomeView = ({ data, id, handleClick }) => {
    return (
        <div className="home">
                <img className="home-gallery" src={data.galleryData[id].image}></img>
                <div className="home-info-wrapper">
                    <div className="home-info-text-container">
                        <div className="home-info-text">
                            <h1 className="home-info-text__header">{data.galleryData[id].header}</h1>
                            <p className="home-info-text__content">{data.galleryData[id].content}</p>
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
    )
}

export default HomeView
