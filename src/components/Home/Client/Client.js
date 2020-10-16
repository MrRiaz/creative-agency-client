import React from 'react';
import './Client.css';
import gif from '../../../images/loading spinner.gif';

const Client = ({feedback}) => {
    return (
        <div className="col-md-4 py-4">
            <div className="card p-4">
                <div className="mb-3 row">
                    {
                        feedback.length === 0 && <div><img src={gif} alt=""/></div>
                    }
                    <img className="feedback-img mr-2" src={feedback.img} alt=""/>
                    <div>
                        <h6> {feedback.name} </h6>
                        <p> {feedback.designation} </p>
                    </div>
                </div>
                <p> {feedback.description} </p>
            </div>
        </div>
    );
};

export default Client;