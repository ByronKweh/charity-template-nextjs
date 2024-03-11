import React, {Fragment} from 'react';
import Navbar2 from '../../components/Navbar2';
import PageTitle from '../../components/pagetitle'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Logo from '/public/images/logo.png'
import CauseSection from '../../components/CauseSection';

const CausePage =() => {
    return(
        <Fragment>
            <Navbar2 Logo={Logo}/>
            <PageTitle pageTitle={'Case Stadies'} pagesub={'Resent Case Studies'}/> 
            <CauseSection/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default CausePage;

