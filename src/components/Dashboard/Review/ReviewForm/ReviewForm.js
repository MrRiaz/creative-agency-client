import React from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../../App';

const ReviewForm = () => {
    const {login} = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = login;

    const { register, handleSubmit, errors } = useForm();
    
    const onSubmit = data => {
        const newData = {...data, ...loggedInUser};

        fetch('https://evening-sea-61964.herokuapp.com/postReview', {
            method: 'POST',
            headers: {'content-Type': 'application/json' },
            body: JSON.stringify(newData)
        })
        .then(result => result.json())
        .then(success => {
            if(success){
                alert('Your review posted successfully');
            }
        })
    };

    return (
        <div className="col-md-7">
            <form className="px-4 pt-4" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <input type="text" defaultValue={loggedInUser.name} ref={register({ required: true })} name="name" placeholder="Your Name" className="form-control" />
                    {errors.name && <span className="text-danger">This field is required</span>}
                </div>

                <div className="form-group">
                    <input ref={register({ required: true })} className="form-control" name="designation" placeholder="Your Company's Name, Designation" type="text" />
                    {errors.designation && <span className="text-danger">This field is required</span>}
                </div>

                <div className="form-group">
                    <input ref={register({ required: true })} className="form-control" name="description" placeholder="Description" type="text" />
                    {errors.description && <span className="text-danger">This field is required</span>}
                </div>

                <div className="form-group text-right mb-1">
                    <button type="submit" className="btn px-5">Send</button>
                </div>
            </form>
        </div>
    );
};

export default ReviewForm;