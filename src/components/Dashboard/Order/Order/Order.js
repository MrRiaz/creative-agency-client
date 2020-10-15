import React from 'react';
import DashboardNavbar from '../../DashboardNavbar/DashboardNavbar';
import SideBar from '../../SideBar/SideBar';
import OrderForm from '../OrderForm/OrderForm';
import './Order.css';

const Order = () => {
    return (
        <section className="container-fluid row">
            <div className="col-md-2">
                <SideBar />
            </div>
            <div className="col-md-10 service-list">
                <DashboardNavbar />
                <OrderForm />
            </div>
        </section>
    );
};

export default Order;