import React, {Fragment} from 'react';
import Navbar2 from '../../components/Navbar2';
import PageTitle from '../../components/pagetitle'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Logo from '/public/images/logo.png'
import EventSection from '../../components/EventSection';

const EventPage =() => {
    return(
        <Fragment>
            <Navbar2 Logo={Logo}/>
            <PageTitle pageTitle={'Events'} pagesub={'Events'}/> 
            <EventSection evCLass={'section-padding'}/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default EventPage;

