import React from "react";
import Link from 'next/link'
import hero1 from '/public/images/slider/slide-1.jpg'
import shape1 from '/public/images/slider/sd1.png'
import shape2 from '/public/images/slider/sd2.png'
import Image from "next/image";




const Hero3 =() => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="wpo-hero-section-3">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col col-xs-6 col-lg-6">
                        <div className="wpo-hero-section-text">
                            <div className="wpo-hero-title">
                                <h2>Let’s Save An <span>Animal</span> Life</h2>
                            </div>
                            <div className="wpo-hero-subtitle">
                                <p>We help local nonprofits access the funding, and support they need to become more.</p>
                            </div>
                            <div className="btns">
                                <Link onClick={ClickHandler} href="/about" className="btn theme-btn">Get Started</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="right-vec">
                            <div className="right-tiger-img">
                                <div className="r-img">
                                    <Image src={hero1} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sd-1"><Image src={shape1} alt=""/></div>
            <div className="sd-2"><Image src={shape2} alt=""/></div>
        </section>
    )
}



export default Hero3;
