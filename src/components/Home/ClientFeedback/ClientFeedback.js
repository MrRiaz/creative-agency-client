import React from 'react';
import './ClientFeedback.css';
import gif from '../../../images/loading spinner.gif';

const Client = ({feedback}) => {
    return (
        <div className="col-md-4 py-4">
            <div className="card p-4">
                {
                    feedback.length === 0 && <div><img src={gif} alt=""/></div>
                }
                {
                <>
                <div className="mb-3 row">
                    <img className="feedback-img mr-2" src={feedback.img} alt=""/>
                    <div>
                        <h6> {feedback.name} </h6>
                        <p> {feedback.designation} </p>
                    </div>
                </div>
                <p> {feedback.description} </p>
                </>
                }
            </div>
        </div>
    );
};

export default Client;