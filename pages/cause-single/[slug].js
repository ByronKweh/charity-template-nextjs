import React, { Fragment } from 'react';
import { useRouter } from 'next/router'
import Causes from '../../api/cause'
import Navbar2 from '../../components/Navbar2';
import PageTitle from '../../components/pagetitle'
import Scrollbar from '../../components/scrollbar'
import Footer from '../../components/footer';
import Logo from '/public/images/logo.png'
import CauseTabs from './alltab';
import CauseSidebar from './sidebar';
import Image from 'next/image';



const TeamSinglePage = (props) => {
    const router = useRouter()

    const CauseDetails = Causes.find(item => item.slug === router.query.slug)


    return (
        <Fragment>
            <Navbar2 Logo={Logo} />
            <PageTitle pageTitle={CauseDetails?.cTitle} pagesub={'Case Single'} />
            <div className="wpo-case-details-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-8">
                            <div className="wpo-case-details-wrap">
                                <div className="wpo-case-details-img">
                                    <Image src={CauseDetails?.cImgSingle} alt="" />
                                </div>
                                <CauseTabs />
                            </div>
                        </div>
                        <CauseSidebar />
                    </div>
                </div>
            </div>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default TeamSinglePage;
