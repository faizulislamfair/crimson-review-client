import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './ServiceDetails.css'

const ServiceDetails = () => {

    const service = useLoaderData();
    const { name, image, price, description } = service;

    return (
        <div className='text-center mt-5 detail p-5'>
            <h2><b>Name:</b> {name}</h2>
            <img src={image} alt="" />
            <h3><b>Price:</b> {price}</h3>
            <h3><b>Detailed Description:</b> {description}</h3>
        </div>
    );
};

export default ServiceDetails;