import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import Hero4 from '../../components/hero4';
import Service3 from '../../components/Service3';
import AboutS4 from '../../components/AboutS4';
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Logo from '/public/images/logo.png'
import PartnerSection from '../../components/PartnerSection';
import ProjectSection3 from '../../components/ProjectSection3';
import CauseSection3 from '../../components/CauseSection3';
import Testimonial2 from '../../components/Testimonial2';
import BlogSection3 from '../../components/BlogSection3';
import abimg from '/public/images/about4.jpg'


const HomePage4 =() => {
    return(
        <Fragment>
            <Navbar Logo={Logo} />
            <Hero4/>
            <Service3/>
            <AboutS4 abImg={abimg} Atitle={'We are Protecting The Ocean With All Our Dedication.'}/>
            <CauseSection3/>
            <ProjectSection3/>
            <Testimonial2 tClass={'wpo-testimonial-area-s3'}/>
            <BlogSection3/>
            <PartnerSection/>
            <Scrollbar/>
            <Footer/>
        </Fragment>
    )
};
export default HomePage4;