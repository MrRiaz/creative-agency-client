import React from 'react';
import DashboardNavbar from '../../DashboardNavbar/DashboardNavbar';
import SideBar from '../../SideBar/SideBar';
import ReviewForm from '../ReviewForm/ReviewForm';

const Review = () => {
    return (
        <section className="container-fluid row">
            <div className="col-md-2">
                <SideBar />
            </div>
            <div className="col-md-10">
                <DashboardNavbar />
                <ReviewForm />
            </div>
        </section>
    );
};

export default Review;