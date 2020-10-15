import React, { useEffect, useState } from 'react';
import DashboardNavbar from '../../DashboardNavbar/DashboardNavbar';
import SideBar from '../../SideBar/SideBar';
import ShowAllOrderList from '../ShowAllOrderList/ShowAllOrderList';

const ShowAllOrder = () => {
    const [allOrder, setAllOrder] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/loadAllOrder')
        .then(res => res.json())
        .then(data => setAllOrder(data))
    }, []);

    return (
        <section className="container-fluid row">
            <div className="col-md-2">
                <SideBar />
            </div>
            <div className="col-md-10">
                <DashboardNavbar />
                <ShowAllOrderList allOrder={allOrder} />
            </div>
        </section>
    );
};

export default ShowAllOrder;