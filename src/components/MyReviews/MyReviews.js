import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/UserContext';
import { useLoaderData, Link } from 'react-router-dom';
import './MyReviews.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const MyReviews = () => {

    const revs = useLoaderData();

    const [displayReviews, setDisplayReviews] = useState(revs);


    const { user } = useContext(AuthContext);


    useEffect(() => {
        fetch(`https://crimson-review-server.vercel.app/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setDisplayReviews(data))
    }, [user?.email])

    const handleDelete = review => {
        const agree = window.confirm(`Are you sure you want to delete this review?`);

        if (agree) {


            fetch(`https://crimson-review-server.vercel.app/reviews/${review._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast("Review Deleted Successfully!");
                        const remainingReviews = displayReviews.filter(rev => rev._id !== review._id);
                        setDisplayReviews(remainingReviews);
                    }
                })
        }
    }



    return (
        <div>

            {displayReviews.length === 0 && <h5 className="text-center mt-5">No reviews were added!</h5>}


            <div className="container">
                <div className="cards">
                    {
                        displayReviews.map(review =>
                            <div key={review._id} className='review-card'>
                                <div className="card-title"><b>Service Name:</b> {review.service_name}</div>
                                <div className='card-text'><b>Review:</b> {review.review}</div>
                                <br />
                                <Link to={`/update/${review._id}`}>
                                    <button className='btn btn-warning'>Edit Button</button>
                                </Link>
                                <br />
                                <br />
                                <button className='btn btn-danger' onClick={() => handleDelete(review)}>Delete Button</button>
                            </div>


                        )
                    }
                </div>
            </div>


            <ToastContainer />

        </div>
    );
};

export default MyReviews;