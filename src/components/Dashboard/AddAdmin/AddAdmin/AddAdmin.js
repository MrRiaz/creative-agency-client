import React from 'react';
import { useForm } from 'react-hook-form';
import DashboardNavbar from '../../DashboardNavbar/DashboardNavbar';
import SideBar from '../../SideBar/SideBar';


const AddAdmin = () => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        fetch('http://localhost:5000/addAdmin', {
            method: 'POST',
            headers: {'content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(result => result.json())
        .then(success => {
            if(success){
                alert('Admin created successfully');
            }
        })
    }
    return (
        <div className="container-fluid row">
            <div className="col-md-2">
                <SideBar />
            </div>
            <div className="col-md-5">
                <DashboardNavbar />
                <form className="px-4 pt-4" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="email" placeholder="Email" className="form-control" />
                        {errors.user_email && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group text-right mb-1">
                        <button type="submit" className="btn submit">Send</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddAdmin;