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

    const style = {
        backgroundColor: '#F4F7FC',
        height: '88vh'
    }

    return (
        <section className="container-fluid">
            <DashboardNavbar />
            <div className="row">
                <div className="col-12 col-md-2">
                    <SideBar />
                </div>
                <div style={style} className="col-md-10 col-12">
                    <div className="service-list mt-4">
                        <h2>Welcome to Dashboard Mr. {loggedInUser.name} </h2>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;