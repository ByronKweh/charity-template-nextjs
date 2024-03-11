import React from 'react'
import abimg from '/public/images/about-vedio.jpg'
import VideoModal from '../../components/ModalVideo'
import Image from 'next/image'

const VideoSec = (props) => {


    return(
        <div className="wpo-about-video-area">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="wpo-about-video-item">
                            <div className="wpo-about-video-img">
                                <Image src={abimg} alt=""/>
                                <div className="entry-media video-holder">
                                    <VideoModal/>
                                </div>
                            </div>
                            <h2>See what we do for the <span>poor people and the children</span></h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoSec;