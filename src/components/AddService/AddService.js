import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddService = () => {

    const [service, setService] = useState({});

    const notify = () => toast("Service Added Successfully!");

    const handleAddService = event => {
        event.preventDefault();
        console.log(service);


        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    // alert('User Added Successfully');
                    event.target.reset();
                }
            })
    }




    const handleInputBlur = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newService = { ...service }
        newService[field] = value;
        setService(newService);
    }


    return (
        <div>
            <h2 className='mt-3'>Please Add a New Service</h2>
            <form onSubmit={handleAddService}>
                <input className='mt-2' onBlur={handleInputBlur} type="text" name='name' placeholder='Name' required />
                <br />
                <br />
                <input onBlur={handleInputBlur} type="text" name='image_url' placeholder='Image URL' required />
                <br />
                <br />
                <input onBlur={handleInputBlur} type="text" name='price' placeholder='Price' required />
                <br />
                <br />
                <input onBlur={handleInputBlur} type="text" name='description' placeholder='Description' required />
                <br />
                <br />

                <button onClick={notify} className='btn btn-primary' type="submit">Add Service</button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default AddService;