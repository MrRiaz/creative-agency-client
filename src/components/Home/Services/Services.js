import React, { useEffect } from 'react';
import './Services.css';
// import service1 from '../../../images/icons/service1.png';
// import service2 from '../../../images/icons/service2.png';
// import service3 from '../../../images/icons/service3.png';
import Service from '../Service/Service';
import { useState } from 'react';

// const services = [
//     {
//         img: service1,
//         title: 'Web & Mobile design',
//         description: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.',
//     },
//     {
//         img: service2,
//         title: 'Graphic design',
//         description: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.',
//     },
//     {
//         img: service3,
//         title: 'Web development',
//         description: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.',
//     }
// ]

const Services = () => {
    const [dynamicService, setDynamicService] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/showService')
        .then(res => res.json())
        .then(data => setDynamicService(data))
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