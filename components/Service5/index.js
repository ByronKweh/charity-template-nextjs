import React from 'react'
import Link from 'next/link'
import Services from '../../api/service'

const Service5 = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

    return(
        <section className="wpo-features-section-s6 section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="wpo-section-title">
                            <span>What We Do</span>
                            <h2>Our Featured Services</h2>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                                suffered alteration in some form,</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {Services.slice(13,16).map((service, sitem) => (
                        <div className="col col-xl-4 col-lg-4 col-sm-6 col-12" key={sitem}>
                            <div className="wpo-features-item">
                                <div className="wpo-features-icon">
                                    <div className="icon">
                                        <i className={`fi  ${service.fIcon1}`}></i>
                                    </div>
                                </div>
                                <div className="wpo-features-text">
                                    <h2><Link onClick={ClickHandler} href='/service/[slug]' as={`/service/${service.slug}`}>{service.title}</Link></h2>
                                    <p>{service.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Service5;