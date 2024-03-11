import React, {Fragment} from 'react';
import Navbar2 from '../../components/Navbar2';
import PageTitle from '../../components/pagetitle'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Logo from '/public/images/logo.png'
import Service5 from '../../components/Service5';

const ServicePage =() => {
    return(
        <Fragment>
            <Navbar2 Logo={Logo}/>
            <PageTitle pageTitle={'Service'} pagesub={'Service'}/> 
            <Service5/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ServicePage;

