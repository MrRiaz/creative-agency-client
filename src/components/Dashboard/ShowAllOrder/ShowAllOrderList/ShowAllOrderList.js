import React from 'react';
import gif from '../../../../images/loading spinner.gif';
import './ShowAllOrderList.css';

const ShowAllOrderList = ({allOrders}) => {

    return (
        <div className="mt-2">
            <table className="table table-borderless form-inner">
                {
                    allOrders.length === 0 && <div><img src={gif} alt=""/></div>
                }
                <thead className="table-head">
                    <tr>
                        <th className="text-secondary" scope="col">Sr No</th>
                        <th className="text-secondary" scope="col">Name</th>
                        <th className="text-secondary" scope="col">Email</th>
                        <th className="text-secondary" scope="col">Service</th>
                        <th className="text-secondary" scope="col">Project Details</th>
                        <th className="text-secondary" scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allOrders.map((allOrder, index) => 
                            <tr>
                                <td>{index + 1}</td>
                                <td>{allOrder.name}</td>
                                <td>{allOrder.email} </td>
                                <td>{allOrder.course}</td>
                                <td>{allOrder.project}</td>
                                <td>
                                <select className="border-0">
                                    <option value={allOrder.status}>{allOrder.status}</option>
                                    <option value="On going">On going</option>
                                    <option value="Done">Done</option>
                                </select>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ShowAllOrderList;