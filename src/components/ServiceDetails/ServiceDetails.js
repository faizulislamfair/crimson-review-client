import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { useLoaderData } from 'react-router-dom';
import './ServiceDetails.css'

const ServiceDetails = () => {

    const service = useLoaderData();
    const { name, image, price, description } = service;

    return (
        <div className="container">
            <h1 className='mt-5'>Services Section</h1>
            <div className='text-center detail p-2'>
                <h2><b>Name:</b> {name}</h2>
                <PhotoProvider>
                    <PhotoView src={image}>
                        <img src={image} alt="" />
                    </PhotoView>
                </PhotoProvider>
                <h3><b>Price:</b> {price}</h3>
                <h3><b>Detailed Description:</b> {description}</h3>
            </div>
        </div>
    );
};

export default ServiceDetails;