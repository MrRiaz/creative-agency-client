import React from 'react';
import './SList.css';
import gif from '../../../images/loading spinner.gif'


const SList = ({order}) => {
    
    return (
        <div className="col-md-5 mt-4">
            <div className="card mb-4">
                {
                    order.length === 0 && <div><img src={gif} alt=""/></div>
                }
                <div className="d-flex justify-content-between">
                    <h6 class="card-title"> {order.course} </h6>
                    <p> {order.status} </p>
                </div>
                
                <p class="card-text text-secondary"><small> {order.project} </small></p>
            </div>
        </div>
    );
};

export default SList;