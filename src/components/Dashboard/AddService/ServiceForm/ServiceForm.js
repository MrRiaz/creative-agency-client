import React, { useState } from 'react';

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

        fetch('http://localhost:5000/addService', {
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
        <div className="col-md-7">
            <form onSubmit={handleSubmit}>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Service Title</label>
                        <input onBlur={handleBlur} type="text" class="form-control" name="title" id="exampleInputEmail1" placeholder="title" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputName1">Description</label>
                        <input onBlur={handleBlur} type="text" class="form-control" name="description" id="exampleInputName1" placeholder="description" />
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlFile1">Upload a Icon </label>
                        <input onChange={handleFileChange} type="file" class="form-control-file" id="exampleFormControlFile1" />
                    </div>
                        <button type="submit" class="btn">Submit</button>
                </form>
        </div>
    );
};

export default ServiceForm;