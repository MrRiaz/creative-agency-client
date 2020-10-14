import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';
import './Header.css';

const Header = () => {
    return (
        <section className="header">
            <div className="container">
                <Navbar />
                <HeaderMain />
            </div>
        </section>
    );
};

export default Header;