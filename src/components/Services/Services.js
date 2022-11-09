import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Service from './../Service/Service';
import './Services.css';

const Services = () => {
    const services = useLoaderData();

    return (
        <div className="container">
            <div className="cards">
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;