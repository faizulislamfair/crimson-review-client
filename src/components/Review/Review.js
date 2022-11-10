import React from 'react';
import './Review.css';

const Review = ({ review }) => {


    return (
        <div className='review-card'>
            <div className="card-title"><b>Service Name:</b> {review.service_name}</div>
            <div className='card-text'><b>Review:</b> {review.review}</div>
        </div>
    );
};

export default Review;