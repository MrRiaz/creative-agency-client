import React from 'react';
import SwiperSlider from '../../SwiperSlider/SwiperSlider';
import Clients from '../Clients/Clients';
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
            <Clients />
            <Footer />
        </div>
    );
};

export default Home;