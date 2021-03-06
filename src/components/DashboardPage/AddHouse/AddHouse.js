import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const AddHouse = () => {
    const history = useHistory();

    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = (e) => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = (e) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('description', info.description);

        fetch('https://creative-agency18.herokuapp.com/addService', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                history.replace('/');
                history.go(0);
            });
        e.preventDefault();
    }

    return (
        <div>
            <h3 className="mt-5">Add House</h3>
            <div className="order-box p-5 mt-5">
                <form onSubmit={handleSubmit}>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>House Title</label>
                                <input onBlur={handleBlur} name="name" className="form-control" type="text" placeholder="Enter title" required/>
                            </div>
                            <div className="form-group">
                                <label>Location</label>
                                <input onBlur={handleBlur} name="location" className="form-control" type="text" placeholder="Enter Location" required/>
                            </div>
                            <div className="form-group">
                                <label>Number of Bathroom</label>
                                <input onBlur={handleBlur} name="bathroom" className="form-control" type="number" placeholder="Number of Bathroom" required/>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Price</label>
                                <input onBlur={handleBlur} name="price" className="form-control" type="number" placeholder="Price" required/>
                            </div>
                            <div className="form-group">
                                <label>Number of Bedroom</label>
                                <input onBlur={handleBlur} name="bedroom" className="form-control" type="number" placeholder="Number of Bedroom" required/>
                            </div>
                            <div className="form-group">
                                <label>Thumbnail</label><br />
                                <input onChange={handleFileChange} type="file" required/>
                            </div>
                        </div>
                    </div>

                    <button type="submit" className="btn text-white" style={{ backgroundColor: "#275A53" }}>Send</button>
                </form>
            </div>
        </div>
    );
};

export default AddHouse;