import React from 'react'
import Link from 'next/link'
import abimg from '/public/images/about2.jpg'
import abimg2 from '/public/images/about3.jpg'
import abimg3 from '/public/images/ab-shape-3.png'
import Image from 'next/image'


const AboutS3 = (props) => {

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }


    return(
        <section className="wpo-about-section-s3 section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="wpo-about-wrap">
                            <div className="wpo-about-img">
                                <Image src={abimg} alt=""/>
                                <div className="wpo-total-raised">
                                    <div className="wpo-total-raised-wrap">
                                        <div className="wpo-total-raised-icon">
                                            <i className="fi flaticon-wallet-filled-money-tool"></i>
                                        </div>
                                        <div className="wpo-total-raised-text">
                                            <ul>
                                                <li>Total Raised<span>$25000</span></li>
                                            </ul>
                                            <div className="progress-section">
                                                <div className="process">
                                                    <div className="progress">
                                                        <div className="progress-bar">
                                                            <div className="progress-value"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="wpo-about-text">
                            <span>About Us</span>
                            <h2>We Can Save More Lifes With Your Helping Hand.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                            <ul>
                                <li>The standard chunk of Lorem Ipsum used since.</li>
                                <li>Randomised words which don't look even slightly believable.</li>
                                <li>Making this the first true generator on the Internet.</li>
                            </ul>
                            <Link onClick={ClickHandler} className="theme-btn-s2" href="/about">More About</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ab-left-img">
                <Image src={abimg2} alt=""/>
            </div>
            <div className="ab-right-img">
                <Image src={abimg3} alt=""/>
            </div>
        </section>
    )
}

export default AboutS3;