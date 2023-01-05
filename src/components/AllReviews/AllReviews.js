import React, { useContext, useEffect, useState } from 'react';
import './AllReviews.css';
import { AuthContext } from './../../contexts/UserContext';
import { useLoaderData } from 'react-router-dom';

const AllReviews = () => {

    const revs = useLoaderData();

    const [allReviews, setAllReviews] = useState(revs)

    const { user } = useContext(AuthContext);


    useEffect(() => {
        fetch(`https://crimson-review-server.vercel.app/reviews`)
            .then(res => res.json())
            .then(data => setAllReviews(data))
    }, [])

    return (
        <div>
            {
                allReviews.map(allReview => <p>{allReview?.review} <br />
                    {allReview?.service_name}

                </p>)
            }
        </div>
    );
};

export default AllReviews;