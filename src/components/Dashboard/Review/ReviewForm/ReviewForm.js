import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { UserContext } from '../../../../App';

const ReviewForm = () => {
    const {login} = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = login;

    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = e => {
        const newInfo = {...info};
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = e => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = () => {
        const formData = new FormData()
        console.log(info)
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('designation', info.designation);
        formData.append('description', info.description);

        fetch('http://localhost:5000/postReview', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(success => {
            // if(success){
            //     alert('Your review posted successfully');
            // }
            console.log(success);
        })
    }

    return (
        <div className="col-md-7">
            <form onSubmit={handleSubmit}>
                    <div class="form-group">
                        <input onBlur={handleBlur} type="text" class="form-control" name="name"  placeholder="Your name" />
                    </div>
                    <div class="form-group">
                        <input onBlur={handleBlur} type="text" class="form-control" name="designation"  placeholder="Your Designation" />
                    </div>
                    <div class="form-group">
                        <input onBlur={handleBlur} type="text" class="form-control" name="description" placeholder="Description" />
                    </div>
                    <div class="form-group">
                        <input onChange={handleFileChange} type="file" class="form-control-file" />
                    </div>
                        <input value="Send" type="submit" class="btn px-4" />
                </form>
        </div>
    );
};

export default ReviewForm;