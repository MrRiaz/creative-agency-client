import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import DashboardNavbar from '../DashboardNavbar/DashboardNavbar';
import Order from '../Order/Order/Order';
import OrderForm from '../Order/OrderForm/OrderForm';
import SideBar from '../SideBar/SideBar';

const Dashboard = () => {
    const {login} = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = login;
    return (
        <section className="container-fluid row">
            <div className="col-md-2">
                <SideBar />
            </div>
            <div className="col-md-10">
                {/* <DashboardNavbar />
                <OrderForm />
                {/* <Order /> */}
                <DashboardNavbar />
                <div className="service-list">
                    <h2>Welcome to Dashboard Mr. {loggedInUser.name} </h2>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;