import React, { useEffect, useState } from 'react';
import DashboardNavbar from '../../DashboardNavbar/DashboardNavbar';
import SideBar from '../../SideBar/SideBar';
import ShowAllOrderList from '../ShowAllOrderList/ShowAllOrderList';

const ShowAllOrder = () => {
    const [allOrders, setAllOrder] = useState([]);

    useEffect(() => {
        fetch('https://evening-sea-61964.herokuapp.com/loadAllOrder')
        .then(res => res.json())
        .then(data => setAllOrder(data))
    }, []);

    const style = {
        backgroundColor: '#F4F7FC',
        height: '88vh'
    }

    return (
        <section className="container-fluid">
            <DashboardNavbar />
            <div className="row">
                <div className="col-md-2">
                    <SideBar />
                </div>
                <div style={style} className="col-md-10">
                    <ShowAllOrderList allOrders={allOrders} />
                </div>
            </div>
        </section>
    );
};

export default ShowAllOrder;