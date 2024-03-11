import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import Hero2 from '../../components/hero2'
import Service from '../../components/Service'
import AboutS2 from '../../components/AboutS2'
import CauseSection from '../../components/CauseSection'
import EventSection from '../../components/EventSection'
import BlogSection from '../../components/BlogSection'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import PartnerSection from '../../components/PartnerSection';
import FunFact from '../../components/FunFact';
import ProjectSection from '../../components/ProjectSection';
import Logo from '/public/images/logo.png'


const HomePage =() => {
    return(
        <Fragment>
            <Navbar Logo={Logo} hclass={'wpo-header-style-2'}/>
            <Hero2/>
            <Service Fclass={'wpo-features-section-s2'}/>
            <AboutS2/>
            <FunFact/>
            <CauseSection/>
            <ProjectSection/>
            <EventSection/>
            <BlogSection/>
            <PartnerSection/>
            <Scrollbar/>
            <Footer/>
        </Fragment>
    )
};
export default HomePage;