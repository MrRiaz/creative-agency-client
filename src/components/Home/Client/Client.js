import React from 'react';
import './Client.css';

const Client = ({feedback}) => {
    console.log(feedback);
    return (
        <div className="col-md-4 py-4">
            <div className="card p-4">
                <div className="mb-3 row">
                    {/* <div>
                        {
                            feedback.image ? <img className="feedback-img mr-2" src={`data:image/jpeg;base64,${feedback.image.img}`} alt=""/> 
                            : <img className="mr-2" style={{width: '70px', marginLeft: '5px'}} src={feedback.img} alt=""/>
                        }
                    </div> */}
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