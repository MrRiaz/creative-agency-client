import React from 'react';
import { useForm } from 'react-hook-form';
import DashboardNavbar from '../../DashboardNavbar/DashboardNavbar';
import SideBar from '../../SideBar/SideBar';


const AddAdmin = () => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        fetch('https://evening-sea-61964.herokuapp.com/addAdmin', {
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

    const style = {
        backgroundColor: '#F4F7FC',
        height: '88vh'
    }

    return (
        <div className="container-fluid">
            <DashboardNavbar />
            <div className="row">
                <div className="col-md-2">
                    <SideBar />
                </div>
                <div style={style} className="col-md-10">
                    <h3 className="my-4">Add a admin</h3>
                    <div className="form-inner p-3">
                        <form className="px-4" onSubmit={handleSubmit(onSubmit)}>
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <input type="text" ref={register({ required: true })} name="email" placeholder="Email" className="form-control" />
                                    {errors.user_email && <span className="text-danger">This field is required</span>}
                                </div>
                                <div className="form-group col-md-6">
                                    <button type="submit" className="btn-admin btn px-5">Send</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddAdmin;