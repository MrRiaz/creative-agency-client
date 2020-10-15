import React, { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { UserContext } from '../../../App';
import DashboardNavbar from '../../Dashboard/DashboardNavbar/DashboardNavbar';
import SideBar from '../../Dashboard/SideBar/SideBar';
import SList from '../SList/SList';
import './ServiceList.css';

const ServiceList = () => {
    const {login} = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = login;
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/checkProduct?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => {
            setOrders(data);
            console.log(data);
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <section className="container-fluid row">
            <div className="col-md-2">
                <SideBar />
            </div>
            <div className="col-md-10">
                <DashboardNavbar />
                <div className="row">
                    {
                        orders.map(order => <SList order={order}> </SList>)
                    }
                </div>
            </div>
        </section>
    );
};

export default ServiceList;