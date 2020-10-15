import React from 'react';
import './SList.css';

const SList = ({order}) => {
    return (
        <div className="col-md-5">
            <div className="card mb-4">
                <h5 class="card-title"> {order.course} </h5>
                <p class="card-text"> {order.project} </p>
            </div>
        </div>
    );
};

export default SList;