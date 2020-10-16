import React from 'react';
import DashboardNavbar from '../../DashboardNavbar/DashboardNavbar';
import SideBar from '../../SideBar/SideBar';
import OrderForm from '../OrderForm/OrderForm';
import './Order.css';

const Order = () => {

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
                    <OrderForm />
                </div>
            </div>
        </section>
    );
};

export default Order;