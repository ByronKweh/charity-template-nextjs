import React, {Fragment} from 'react';
import Navbar2 from '../../components/Navbar2';
import Hero5 from '../../components/hero5';
import Service4 from '../../components/Service4';
import AboutS4 from '../../components/AboutS4';
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Logo from '/public/images/logo.png'
import PartnerSection from '../../components/PartnerSection';
import TeamSection2 from '../../components/TeamSection2';
import BlogSection4 from '../../components/BlogSection4';
import Map from '../../components/Map';
import abimg from '/public/images/about5.jpg'
import FunFact from '../../components/FunFact';
import CauseSection4 from '../../components/CauseSection4';


const HomePage5 =() => {
    return(
        <Fragment>
            <Navbar2 Logo={Logo} />
            <Hero5/>
            <Service4/>
            <Map/>
            <AboutS4 abClass={'wpo-about-section-s5'} abImg={abimg} Atitle={'General information about coronavirus disease'}/>
            <FunFact/>
            <TeamSection2/>
            <CauseSection4/>
            <BlogSection4/>
            <PartnerSection tNone={'title-none'}/>
            <Scrollbar/>
            <Footer/>
        </Fragment>
    )
};
export default HomePage5;