import React from 'react'

import Navbar from "../Navbar"

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="home">
                <div className="home-gallery"></div>
                <div className="home-info-wrapper">
                    <div className="home-info-text">
                        <h1 className="home-info-text__header">Header Text</h1>
                        <p className="home-info-text__content">Text text text text</p>
                        <p className="home-info-text__button">button button</p>
                    </div>
                    <div className="home-info-arrows">
                        <div className="home-info-arrows__arrow arrow-right"></div>
                        <div className="home-info-arrows__arrow arrow-light"></div>
                    </div>
                </div>
                <div className="home-about">
                    <div className="home-about__photo photo-left"></div>
                    <div className="home-about__text">
                        <h3 className="home-about__text__header">about furniture</h3>
                        <p className="home-about__text__content">about content content content</p>
                    </div>
                    <div className="home-about__photo photo-right"></div>
                </div>
            </div>
        </>
    )
}

export default Home
