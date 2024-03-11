import React from "react";
import Slider from "react-slick";
import Link from 'next/link'
import Projects from '../../api/projects'
import Image from "next/image";

const ProjectSection2 = () => {

    var settings = {
        dots: false,
        arrows: false,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="wpo-project-section-s2 section-padding">
            <div className="container-fluid">
                <div className="sortable-gallery">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="project-grids gallery-active">
                                <Slider {...settings}>
                                    {Projects.slice(6, 11).map((project, pitem) => (
                                        <div className="grid" key={pitem}>
                                            <div className="img-holder">
                                                <Image src={project.projectImg} alt="" />
                                                <div className="hover-content">
                                                    <Link onClick={ClickHandler} className="plus" href="/project/[slug]" as={`/project/${project.slug}`}><i className="ti-plus"></i></Link>
                                                    <h4><Link onClick={ClickHandler} href="/project/[slug]" as={`/project/${project.slug}`}>{project.title}</Link></h4>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProjectSection2;