import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceDetails from './../ServiceDetails/ServiceDetails';

const ReviewById = () => {

    const reviewSingle = useLoaderData();
    console.log(reviewSingle)

    return (
        <div>
            <ServiceDetails reviewSingle={reviewSingle}></ServiceDetails>
        </div>
    );
};

export default ReviewById;