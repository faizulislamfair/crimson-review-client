import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Services = () => {
    const services = useLoaderData();

    return (
        <div>
            {
                services.map(service => <p key={service._id}>
                    {service.name}
                </p>)
            }
        </div>
    );
};

export default Services;