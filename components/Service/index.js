import React from 'react'
import Link from 'next/link'
import Services from '../../api/service'

const Service = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

    return(

        <section className={`${props.Fclass} section-padding  ${props.vclassClass}`}>
            <div className="container">
                <div className="row">
                    {Services.slice(0, 4).map((service, sitem) => (
                        <div className="col col-xl-3 col-lg-6 col-sm-6 col-12" key={sitem}>
                            <div className="wpo-features-item">
                                <div className="wpo-features-icon">
                                    <div className="icon">
                                        <i className={`fi  ${service.fIcon1}`}></i>
                                    </div>
                                </div>
                                <div className="wpo-features-text">
                                    <h2><Link onClick={ClickHandler} href='/service/[slug]' as={`/service/${service.slug}`}>{service.title}</Link></h2>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Service;