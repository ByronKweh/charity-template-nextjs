import React, {Fragment} from 'react';
import PageTitle from '../../components/pagetitle'
import BlogList from '../../components/BlogList'
import Navbar from '../../components/Navbar';
import Footer from '../../components/footer';
import Scrollbar from '../../components/scrollbar'
import Logo from '/public/images/logo.png'

const BlogSingle = (props) => {

    return (
        <Fragment>
            <Navbar Logo={Logo}/>
            <PageTitle pageTitle='Latest News' pagesub="blog" />
            <BlogList blLeft={'d-none'} blRight={'col-lg-10 offset-lg-1'}/>
            <Footer />
            <Scrollbar/>
        </Fragment>
    )
};
export default BlogSingle;
