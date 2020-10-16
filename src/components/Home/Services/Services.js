import React, { useEffect } from 'react';
import './Services.css';
import Service from '../Service/Service';
import { useState } from 'react';

const Services = () => {
    const [dynamicService, setDynamicService] = useState([]);

    useEffect(() => {
        fetch('https://evening-sea-61964.herokuapp.com/showService')
        .then(res => res.json())
        .then(data => {
            setDynamicService(data)
        })
    }, [])


    return (
        <section className="container mx-auto text-center py-5">
            <h2 className="h2-header mb-5">Provide awesome <span className="brand-color">services</span></h2>
            <div className="row">
                {
                    dynamicService.map(service => <Service service={service}></Service> )
                }
            </div>
        </section>
    );
};

export default Services;