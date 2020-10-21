import React from 'react';
import ClientsFeedback from '../ClientsFeedback/ClientsFeedback';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Partners from '../Partners/Partners';
import Portfolio from '../Portfolio/Portfolio';
import Services from '../Services/Services';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Header />
            <Partners />
            <Services />
            <Portfolio />
            <ClientsFeedback />
            <Footer />
        </div>
    );
};

export default Home;