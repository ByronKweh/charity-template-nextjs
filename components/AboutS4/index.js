import React from 'react'
import Link from 'next/link'
import VideoModal from '../../components/ModalVideo'
import simg from '/public/images/slider/right-img5.png'
import Image from 'next/image'


const AboutS4 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }


    return (
        <section className={`wpo-about-section-s4 section-padding ${props.abClass}`}>
            <div className="container">
                <div className="wpo-about-items">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-12 col-12">
                            <div className="wpo-about-wrap">
                                <div className="wpo-about-img">
                                    <Image src={props.abImg} alt="" />
                                    <div className="pop-up-video">
                                        <VideoModal />
                                    </div>
                                    <div className="shp-1"></div>
                                    <div className="shp-2"></div>
                                </div>
                                <div className="ab-shape"><Image src={simg} alt="" /></div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="wpo-about-text">
                                <span>About Us</span>
                                <h2>{props.Atitle}</h2>
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
            </div>
        </section>
    )
}

export default AboutS4;