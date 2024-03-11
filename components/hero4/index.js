import React from "react";
import Link from 'next/link'

const Hero4 =() => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="wpo-hero-section-4">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col col-xs-6 col-lg-6">
                        <div className="wpo-hero-section-text">
                            <div className="wpo-hero-title">
                                <h2>Protect our oceans to <span>Protect our future</span></h2>
                            </div>
                            <div className="wpo-hero-subtitle">
                                <p>We help local nonprofits access the funding, tools, training, and support they need to become more.</p>
                            </div>
                            <div className="btns">
                                <Link onClick={ClickHandler} href="/about" className="btn theme-btn">Get Started</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}



export default Hero4;
