import React from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../../App';

const OrderForm = () => {
    const {login} = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = login;
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        console.log(data);
        fetch('http://localhost:5000/addOrder', {
            method: 'POST',
            headers: {"content-type":"application/json"},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success => {
            if(success){
                alert('Your Order created successfully');
            }
        })
    };

    return (
        <div className="col-md-6 mt-4">
            <form className="px-4 pt-4" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <input type="text" ref={register({ required: true })} name="name" placeholder="Your Name" className="form-control" />
                    {errors.name && <span className="text-danger">This field is required</span>}
                </div>

                <div className="form-group">
                    <input type="text" defaultValue={loggedInUser.email} ref={register({ required: true })} name="email" placeholder="Email" className="form-control" />
                    {errors.email && <span className="text-danger">This field is required</span>}
                </div>

                <div className="form-group">
                    <select className="form-control" name="course" ref={register({ required: true })} >
                        <option disabled={true} value="Not set">Select Service</option>
                        <option value="Web and Mobile design">Web and Mobile design</option>
                        <option value="Graphic design">Graphic design</option>
                        <option value="Web development">Web development</option>
                    </select>
                    {errors.course && <span className="text-danger">This field is required</span>}
                </div>

                <div className="form-group">
                    <textarea ref={register({ required: true })} className="form-control" name="project" placeholder="Project Details" type="text" rows="5" />
                    {errors.project && <span className="text-danger">This field is required</span>}
                </div>

                <div className="form-group row">
                    <div className="col-6">
                        <input ref={register({ required: false})} disabled defaultValue="$250" className="form-control" name="price" placeholder="Price" type="text" />
                        {errors.price && <span className="text-danger">This field is required</span>}
                    </div>

                    <div className="col-6">
                        <input ref={register({ required: false })} className="form-control" name="imgfile" placeholder="Weight" type="file" />
                        {errors.imgfile && <span className="text-danger">This field is required</span>}
                    </div>
                </div>

                <div className="form-group text-right mb-1">
                    <input type="submit" value="Send" className="btn px-4 float-left" />
                </div>
            </form>
        </div>
    );
};

export default OrderForm;