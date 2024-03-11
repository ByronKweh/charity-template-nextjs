import React from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Error from '../../components/404';
import Logo from '/public/images/logo.png'

const StoryPage = (props) => {

    return (
        <div>
            <Navbar Logo={Logo}/>
            <PageTitle pageTitle={'404'} pagesub={'404'}/> 
            <Error/>
            <Footer ftClass={'wpo-site-footer-s2'}/>
            <Scrollbar/>
        </div>
    )
};
export default StoryPage;


