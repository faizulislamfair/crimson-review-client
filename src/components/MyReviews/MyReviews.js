import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/UserContext';
import Review from './../Review/Review';

const MyReviews = () => {

    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([])
    console.log(reviews);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])



    return (
        <div>

            {reviews.length === 0 && <h5 className="text-center mt-5">No reviews were added!</h5>}


            <div className="container">
                <div className="cards">
                    {
                        reviews.map(review => <Review key={review._id} review={review}></Review>)
                    }
                </div>
            </div>



        </div>
    );
};

export default MyReviews;