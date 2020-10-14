import React from 'react';

const Client = ({feedback}) => {
    return (
        <div className="col-md-4 py-5">
            <div className="card p-4">
                <div className="mb-3 row">
                    <img className="mr-2" style={{width: '70px', marginLeft: '5px'}} src={feedback.img} alt=""/>
                    <div>
                        <h6> {feedback.name} </h6>
                        <p> {feedback.designation} </p>
                    </div>
                </div>
                <p> {feedback.feedback} </p>
            </div>
        </div>
    );
};

export default Client;