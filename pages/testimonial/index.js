import React, {Fragment} from 'react';
import Navbar2 from '../../components/Navbar2';
import PageTitle from '../../components/pagetitle'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Logo from '/public/images/logo.png'
import Testimonial2 from '../../components/Testimonial2';

const TestimonialPage =() => {
    return(
        <Fragment>
            <Navbar2 Logo={Logo}/>
            <PageTitle pageTitle={'Testimonial'} pagesub={'Testimonial'}/> 
            <Testimonial2 tClass={'wpo-testimonial-area-s3'}/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default TestimonialPage;

