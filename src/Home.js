import React from 'react';
import About from './About';
import Accordion from './accordion/Accordion';
import Choose from './Choose';
import Customers from './Customers';
import Download from './Download';
import Footer from './Footer';
import Menu from './Menu';
import Navbar from './Navbar';
import ScrollArrow from './ScrollTop';
import Services from './Services';

const Home = () => {
    return (
        <>
            <Navbar />
            <About />
            <Menu />
            <Services />
            <Choose />
            <Customers />
            <Accordion/>
            <Download />
            <Footer />
            <ScrollArrow/>
        </>
    )
}

export default Home;