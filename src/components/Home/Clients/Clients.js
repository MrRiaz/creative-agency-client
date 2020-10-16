import React, { useEffect } from 'react';
import './Clients.css';
import Client from '../Client/Client';
import { useState } from 'react';


const Clients = () => {

    const [clientsfeedback, setClientsFeedback] = useState([])

    useEffect(() => {
        fetch("https://evening-sea-61964.herokuapp.com/showreview")
        .then(res => res.json())
        .then(data => {
            setClientsFeedback(data)
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