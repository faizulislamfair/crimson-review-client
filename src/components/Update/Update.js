import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {

    const reviewed = useLoaderData();

    const [review, setReview] = useState(reviewed);


    const handleUpdateReview = event => {
        event.preventDefault();
        console.log(review);

        fetch(`https://fair-online-delivery-service-review-server.vercel.app/reviews/${reviewed._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Review Updated');
                    console.log(data);
                }
            })


    }


    const handleInputChange = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newReview = { ...review }
        newReview[field] = value;
        setReview(newReview);
    }


    return (
        <div>
            <h2>Please Update: {reviewed.name}</h2>
            <br />

            <form onSubmit={handleUpdateReview}>
                <input onChange={handleInputChange} defaultValue={reviewed.review} type="text" name='review' id="" placeholder='review' required />
                <br />
                <br />
                <button className='btn btn-success' type="submit">Update Review</button>
            </form>
        </div>
    );
};

export default Update;