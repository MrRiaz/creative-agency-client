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
        fetch('https://evening-sea-61964.herokuapp.com/checkProduct?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => {
            setOrders(data);
        })
        .catch(err => console.log(err))
    }, [])


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
                    <div className="row">
                        {
                            orders.map(order => <SList order={order}> </SList>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceList;