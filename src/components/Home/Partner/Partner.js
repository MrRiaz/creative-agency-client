import React from 'react';
import './Partner.css';

const Partner = ({partner}) => {
    return (
        <div className="col-md-2 text-center mb-2">
            <img className="partner-img" src={partner.img} alt=""/>
        </div>
    );
};

export default Partner;