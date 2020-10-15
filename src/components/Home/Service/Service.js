import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    return (
        <div className="col-md-4 my-3">
            <Link to="/addOrder">
                <div className="service-card text-center">
                    {
                        service.image ? <img className="card-img" src={`data:image/jpeg;base64,${service.image.img}`} alt=""/> 
                        :
                        <img style={{width: '200px'}} src={`http://localhost:5000/${service.img}`} alt=""/>
                    }
                    <h5 className="my-3"> {service.title} </h5>
                    <p className="text-secondary"> {service.description} </p>
                </div>
            </Link>
        </div>
    );
};

export default Service;