import React, { useState } from 'react';
import './ServiceForm.css';

const ServiceForm = () => {
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
        formData.append('file', file);
        formData.append('description', info.description);
        formData.append('title', info.title);

        fetch('https://evening-sea-61964.herokuapp.com/addService', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            console.error(error)
        })
    }
    return (
        <div className="col-md-12 mt-2 ">
            <h3 className="mb-3">Add Services</h3>
            <form onSubmit={handleSubmit}>
                <div className="row form-inner">
                    <div className="col-md-6">
                        <div class="form-group">
                            <label for="exampleInputEmail1">Service Title</label>
                            <input onBlur={handleBlur} type="text" class="form-control" name="title" id="exampleInputEmail1" placeholder="title" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputName1">Description</label>
                            <input onBlur={handleBlur} type="text" class="form-control" name="description" id="exampleInputName1" placeholder="description" />
                        </div>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="exampleFormControlFile1">Upload a Icon </label>
                        <input onChange={handleFileChange} type="file" class="form-control-file" id="exampleFormControlFile1" />
                    </div>
                </div>
                    <button type="submit" class="btn btn-admin px-4 mt-2 mr-1 float-right">Submit</button>
            </form>
        </div>
    );
};

export default ServiceForm;