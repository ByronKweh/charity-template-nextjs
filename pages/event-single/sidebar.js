import React from 'react'
import Link from 'next/link'
import Projects from '../../api/projects'
import Events from '../../api/event'
import Image from 'next/image'

const EventSidebar = (props) => {

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div className="col col-lg-4 col-12">
            <div className="blog-sidebar">
                <div className="widget search-widget">
                    <form onSubmit={SubmitHandler}>
                        <div>
                            <input type="text" className="form-control" placeholder="Search Post.." />
                            <button type="submit"><i className="ti-search"></i></button>
                        </div>
                    </form>
                </div>
                <div className="widget recent-post-widget">
                    <h3>Related Posts</h3>
                    <div className="posts">
                        {Events.slice(0, 3).map((event, eitem) => (
                            <div className="post" key={eitem}>
                                <div className="img-holder">
                                    <Image src={event.eImg} alt="" />
                                </div>
                                <div className="details">
                                    <h4><Link onClick={ClickHandler} href="/event-single/[slug]" as={`/event-single/${event.slug}`}>{event.eTitle}</Link></h4>
                                    <span className="date">{event.date}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="widget wpo-instagram-widget">
                    <div className="widget-title">
                        <h3>Projects</h3>
                    </div>
                    <ul className="d-flex">
                        {Projects.slice(0, 6).map((project, pitem) => (
                            <li className="grid" key={pitem}>
                                <div className="img-holder">
                                    <Link onClick={ClickHandler} href="/project/[slug]" as={`/project/${project.slug}`}>
                                        <Image src={project.projectImg} alt="" />
                                    </Link>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="widget tag-widget">
                    <h3>Tags</h3>
                    <ul>
                        <li><Link onClick={ClickHandler} href="/cause-single/Help-Children">Charity</Link></li>
                        <li><Link onClick={ClickHandler} href="/cause-single/Help-Children">Planning</Link></li>
                        <li><Link onClick={ClickHandler} href="/cause-single/Help-Children">Helping</Link></li>
                        <li><Link onClick={ClickHandler} href="/cause-single/Help-Children">Education</Link></li>
                        <li><Link onClick={ClickHandler} href="/cause-single/Help-Children">Medical</Link></li>
                        <li><Link onClick={ClickHandler} href="/cause-single/Help-Children">Wildlife</Link></li>
                        <li><Link onClick={ClickHandler} href="/cause-single/Help-Children">Donation</Link></li>
                        <li><Link onClick={ClickHandler} href="/cause-single/Help-Children">Help</Link></li>
                        <li><Link onClick={ClickHandler} href="/cause-single/Help-Children">World Pandamic</Link></li>
                    </ul>
                </div>
                <div className="wpo-contact-widget widget">
                    <h2>How We Can <br /> Help You!</h2>
                    <p>labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                    <Link href="/contact">Contact Us</Link>
                </div>
            </div>
        </div>

    )
}

export default EventSidebar;