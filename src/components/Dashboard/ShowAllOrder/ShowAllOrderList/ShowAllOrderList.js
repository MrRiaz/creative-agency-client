import React from 'react';

const ShowAllOrderList = ({allOrder}) => {
    return (
        <div className="mt-2">
            <table className="table table-borderless">
                <thead>
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
                        allOrder.map((patient, index) => 
                            <tr>
                                <td>{index + 1}</td>
                                <td>{patient.name}</td>
                                <td>{patient.email} </td>
                                <td>{patient.course}</td>
                                <td>{patient.project}</td>
                                <td>pending</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ShowAllOrderList;