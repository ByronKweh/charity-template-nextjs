import React from "react";
import Slider from "react-slick";
import Link from 'next/link'



const Hero6 = (props) => {


    var settings = {
        dots: false,
        arrows: true,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        fade: true
    };

    return (
        <section className={`wpo-hero-slider ${props.heroClass}`}>
            <div className="hero-container">
                <div className="hero-wrapper">
                    <Slider {...settings}>
                        <div className="hero-slide">
                            <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${'/images/slider/slide-3.jpg'})` }}>
                                <div className="container-fluid">
                                    <div className="slide-content">
                                        <div className="wpo-hero-title">
                                            <h2>Green is for hope just as gray is for death.</h2>
                                        </div>
                                        <div className="wpo-hero-subtitle">
                                            <p>We help local nonprofits access the funding, and support they need to become more.</p>
                                        </div>
                                        <div className="clearfix"></div>
                                        <div className="slide-btns">
                                            <Link href="/about" className="theme-btn">Get Started</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="hero-slide">
                            <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${'/images/slider/slide-5.jpg'})` }}>
                                <div className="container-fluid">
                                    <div className="slide-content">
                                        <div className="wpo-hero-title">
                                            <h2>Green is for hope just as gray is for death.</h2>
                                        </div>
                                        <div className="wpo-hero-subtitle">
                                            <p>We help local nonprofits access the funding, and support they need to become more.</p>
                                        </div>
                                        <div className="clearfix"></div>
                                        <div className="slide-btns">
                                            <Link href="/about" className="theme-btn">Get Started</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hero-slide">
                            <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${'/images/slider/slide-6.jpg'})` }}>
                                <div className="container-fluid">
                                    <div className="slide-content">
                                        <div className="wpo-hero-title">
                                            <h2>Green is for hope just as gray is for death.</h2>
                                        </div>
                                        <div className="wpo-hero-subtitle">
                                            <p>We help local nonprofits access the funding, and support they need to become more.</p>
                                        </div>
                                        <div className="clearfix"></div>
                                        <div className="slide-btns">
                                            <Link href="/about" className="theme-btn">Get Started</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default Hero6;