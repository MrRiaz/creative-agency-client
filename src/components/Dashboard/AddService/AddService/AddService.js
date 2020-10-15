import React from 'react';
import DashboardNavbar from '../../DashboardNavbar/DashboardNavbar';
import SideBar from '../../SideBar/SideBar';
import ServiceForm from '../ServiceForm/ServiceForm';

const AddService = () => {
    return (
        <section className="container-fluid row">
            <div className="col-md-2">
                <SideBar />
            </div>
            <div className="col-md-10">
                <DashboardNavbar />
                <ServiceForm />
            </div>
        </section>
    );
};

export default AddService;