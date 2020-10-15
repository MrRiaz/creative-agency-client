import React, { useEffect } from 'react';
import './Clients.css';
// import custom1 from '../../../images/customer-2.png';
// import custom2 from '../../../images/customer-3.png';
// import custom3 from '../../../images/customer-2.png';
import Client from '../Client/Client';
import { useState } from 'react';


// const customersFeedback = [
//     {
//         img : custom1,
//         name: 'Nash Patrik',
//         designation : 'CEO, Manpol',
//         feedback: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus natus  quibusdam temporibus fuga magni ratione quod dignissimos, a quam omnis?"
//     },
//     {
//         img : custom2,
//         name: 'Miriam Barron',
//         designation : 'CEO, Manpol',
//         feedback: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus natus  quibusdam temporibus fuga magni ratione quod dignissimos, a quam omnis?"
//     },
//     {
//         img : custom3,
//         name: 'Bria Malone',
//         designation : 'CEO, Manpol',
//         feedback: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus natus  quibusdam temporibus fuga magni ratione quod dignissimos, a quam omnis?"
//     },
// ]

const Clients = () => {

    const [clientsfeedback, setClientsFeedback] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/showreview")
        .then(res => res.json())
        .then(data => {
            setClientsFeedback(data);
            console.log(data);
        })
    }, [])


    return (
        <section className=" container mx-auto clients-section">
            <h2 className="clients-header text-center">Clients <span className="brand-color">Feedback</span></h2>
            <div className="row">
                {
                    clientsfeedback.map(clientsfeedback => <Client feedback={clientsfeedback}></Client>)
                }
            </div>
        </section>
    );
};

export default Clients;