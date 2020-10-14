import React from 'react';
import './Service.css';

const Service = ({service}) => {
    return (
        <div className="col-md-4 my-3">
            <div className="service-card text-center">
                <img className="card-img" src={service.img} alt="" />
                <h5 className="my-3"> {service.title} </h5>
                <p className="text-secondary"> {service.description} </p>
            </div>
        </div>
    );
};

export default Service;