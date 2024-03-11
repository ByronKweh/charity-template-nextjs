import React from 'react'
import Link from 'next/link'
import Events from '../../api/event'
import Image from 'next/image'

const EventSection = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

    return(
        <div className={`wpo-event-area ${props.evCLass}`}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="wpo-section-title">
                            <span>Events</span>
                            <h2>Fundraising Events</h2>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                                suffered alteration in some form,</p>
                        </div>
                    </div>
                </div>
                <div className="wpo-event-wrap">
                    <div className="row">
                        {Events.slice(0,3).map((event, eitem)=>(
                            <div className="col col-lg-4 col-md-6 col-12" key={eitem}>
                                <div className="wpo-event-single">
                                    <div className="wpo-event-item">
                                        <div className="wpo-event-img">
                                            <Image src={event.eImg} alt=""/>
                                        </div>
                                        <div className="wpo-event-content">
                                            <div className="wpo-event-text-top">
                                                <span>{event.date}</span>
                                                <h2><Link onClick={ClickHandler} href='/event-single/[slug]' as={`/event-single/${event.slug}`}>{event.eTitle}</Link></h2>
                                                <p>{event.dec}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventSection;