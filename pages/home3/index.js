import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import Hero3 from '../../components/hero3'
import Service2 from '../../components/Service2'
import AboutS3 from '../../components/AboutS3';
import BlogSection2 from '../../components/BlogSection2';
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Logo from '/public/images/logo2.png'
import PartnerSection from '../../components/PartnerSection';
import ProjectSection2 from '../../components/ProjectSection2';
import CtaSection from '../../components/ctaSection';
import vimg from '/public/images/bird.png'
import CauseSection2 from '../../components/CauseSection2';
import Testimonial2 from '../../components/Testimonial2';
import EventSection2 from '../../components/EventSection2';


const HomePage =() => {
    return(
        <Fragment>
            <Navbar Logo={Logo} hclass={'wpo-header-style-3'}/>
            <Hero3/>
            <Service2/>
            <AboutS3/>
            <CtaSection ctClass={'wpo-cta-area-s2'} vImg={vimg} cTitle={'Lets Become a Volunteer and Save Wildlife'}/>
            <CauseSection2 CmClass={'wpo-campaign-area-s2'}/>
            <ProjectSection2/>
            <Testimonial2/>
            <EventSection2/>
            <BlogSection2/>
            <PartnerSection/>
            <Scrollbar/>
            <Footer/>
        </Fragment>
    )
};
export default HomePage;